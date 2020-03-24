import React from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import Backbone from 'backbone';
import Modal from "../Modal/index.js";
import "./style.css"

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
        console.log("LOGGING IN...");
        console.log("Response Object:: ", response)
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

  render(){
    return(
      <div>
        <a id="button-login" className="btn btn-primary" href="javascript:;" onClick={e => this.modalOpen(e)}>
          Click here to Sign Up or Log In
        </a>
        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
        {this.state.user ? null : (
          <div ref={(div) => {this.loginContainer = div; }} />
        )}
        </Modal>
        {this.state.user ? (
          <div className="container">
            <div>Welcome, {this.state.user}!</div>
            <button onClick={this.logout}>Logout</button>
          </div>
        ) : null}
      </div>
    );
  }
}