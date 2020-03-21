import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/footer.js';
// import Menu from './components/Menu/menu.js';
// import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';
// import Home from './Home';
import LoginPage from './components/auth/LoginPage';
import Save from './components/Save/saveMenu.js'



function App() {
  return (
    <Router>
       {/* <Security issuer='https://dev-243399.okta.com/oauth2/default'
                  clientId='0oa33m68qMWbxYgrm4x6'
                  redirectUri={window.location.origin + '/implicit/callback'} >
          <Route path='/' exact={true} component={Home}/>
          <SecureRoute path='/protected' component={Menu}/>
          <Route path='/implicit/callback' component={LoginCallback} />
        </Security> */}
      <div>
        <Nav />
        <Route path="/login" component={LoginPage} />
       
          {/* <Save/> */}
        </div>
        
        <div id="phaser-box">
          <div id="phaser"></div>
        </div>
        <Footer />
      
    </Router> 
  );
}

export default App;
