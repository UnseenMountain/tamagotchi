import React from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import Backbone from 'backbone';
import Modal from "../Modal/index.js";
import "./style.css";
import { Button } from "react-bootstrap";
import $ from "jquery";

export default class LoginPage extends React.Component{
  constructor(){
    super();
    this.state = { user: null };
    this.widget = new OktaSignIn({
      baseUrl: 'https://dev-773440.okta.com',
      clientId: '0oa3y16e0IagrZzy64x6',
      redirectUri: 'http://localhost:3000',
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
        this.playerLoad(response);
        //PASS THIS INTO THE DB
      }else{
        this.showLogin();
      }
    });
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

  //LOAD OR CREATE THE PLAYER
  playerLoad(response){
    // console.log("LOGGING IN...");
    // // console.log("User ID:: ", response.userId);
    // const player = response.userId;
   
    // let data = { //Get character data from server
    // player : player
    // }
    // console.log(data);

    // // Send the POST request.
    // $.ajax("/", {
    //     type: "GET",
    //     data: data
    // }).then(
    // function(req) {
    // });
  }

  render(){
    return(
      <div>
        {this.state.user ? null : (
          <a href="javascript:;" onClick={e => this.modalOpen(e)}>
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
            <div>Welcome, {this.state.user}!</div>
            <Button variant="secondary" onClick={this.logout}>Logout</Button>
          </div>
        ) : null}
      </div>
    );
  }
}