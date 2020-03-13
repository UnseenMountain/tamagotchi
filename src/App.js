import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from "./pages/Game.js"
import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/footer.js';
import Menu from './components/Menu/menu.js';
// import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';
// import Home from './Home';
import LoginPage from './components/auth/LoginPage';
import PetMenu from './components/PetMenu/PetMenu.js';
// import Menu from './components/Menu/menu.js';



>>>>>>> f7d28fa27e4657a7d9ffb9a2c8eb88cfc76e6a1e


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

        <Menu>
          <Route path="/login" component={LoginPage} />

        {/* <Menu> */}
          <PetMenu>
          <Route exact path="/" component={Game} />
          <Route exact path="/Game" component={Game}></Route>
          </PetMenu>
        {/* </Menu> */}
        <Footer />
      </div>
    </Router> 
  );
}

export default App;
