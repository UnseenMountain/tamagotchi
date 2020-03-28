import React from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import Backbone from 'backbone';
import Modal from "../Modal/index.js";
import "./style.css";
import { Button } from "react-bootstrap";
import API from "../../utils/API";

export default class LoginPage extends React.Component{
  constructor(){
    super();
    this.state = { 
      user: null
    };
    this.widget = new OktaSignIn({
      baseUrl: 'https://dev-773440.okta.com',
      clientId: '0oa3y16e0IagrZzy64x6',
      redirectUri: 'https://fathomless-stream-68190.herokuapp.com',
      authParams: {
        issuer: "https://dev-773440.okta.com/oauth2/default",
        responseType: ['token', 'id_token'],
        display: 'page'
      },
      features: {
          registration: true
      }
    });

    this.showLogin = this.showLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    this.widget.session.get((response) => {
      if(response.status !== 'INACTIVE'){
        this.setState({user:response.login});
        //Load the player if they exist
        const playerId = response.userId;
        this.loadPlayer(playerId); 
      }else{
        this.showLogin();
      }
    });
  }

  loadPlayer = (playerId) => {
    //GET PLAYER FROM THE API
    API.getPlayer(playerId)
      .then(res => {
        console.log("API RES::", res)
        if(res.data.length === 0){
          console.log("PLAYER DOES NOT EXIST");
          this.newPlayer(playerId);
        } else {
          console.log("PLAYER EXISTS");
          //Pass the location to Phaser???
          // console.log("res.data[0].location:: ", res.data[0].location);
          //Update player state
          // this.setState({player: res.data[0]})
          this.playerLogin(res.data[0])
        }}
        )
      .catch(err => console.log(err));
  }

  newPlayer = (playerId) => {
    console.log("CREATING NEW PLAYER...");
    //CREATE NEW PLAYER WITH THE API
    API.createPlayer(playerId)
      .then(res => {
        console.log("NEW PLAYER CREATED");
        //A new player has been created; stats set to default
      })
  }

  playerLogin(playerObj){
    this.props.handler(playerObj);
  }

  showLogin(){
    Backbone.history.stop();
    this.widget.renderEl({el:this.loginContainer},
      (response) => {
       if (response.status !== "ACTIVATION_EMAIL_SENT")   {
          // console.log(response);
          this.setState({user: response.claims.email});
       }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout(){
    this.widget.signOut(() => {
      this.setState({user: null});
      this.showLogin();
    });
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      user: "",
      modal: false
    });
  }

  render(){
    return(
      <div>
        {this.state.user ? null : (
          <a href="javascript:;" onClick={e => this.modalOpen(e)}>
          {/* ^^ This is a valid value; page reloads if 'fixed' */}
          <Button variant="primary">Click here to Sign Up or Log In</Button>
          </a>
        )}
        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
        {this.state.user ? null : (
          <div ref={(div) => {this.loginContainer = div; }} />
        )}
        </Modal>
        {this.state.user ? (
          <div className="container">
            <div className="user-welcome">Welcome, {this.state.user}!</div>
            <Button variant="secondary" onClick={this.logout}>Logout</Button>
          </div>
        ) : null}
      </div>
    );
  }
}