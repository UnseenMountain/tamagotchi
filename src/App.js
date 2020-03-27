import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Phaser from "phaser";
import { IonPhaser } from '@ion-phaser/react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/Footer.js';

import { Navbar } from 'react-bootstrap';

import Footer from './components/Footer/footer.js';

// import Menu from './components/Menu/menu.js';
// import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';
// import Home from './Home';
import LoginPage from './components/auth/LoginPage';
import SaveMenu from './components/Save/saveMenu';

//Importing Scenes
import BootScene from "./phaser/boot";
import BattleScene from "./phaser/battle";
import UIScene from "./phaser/ui";
//Map Scenes
import WorldScene from "./phaser/worldmap";
import DesertScene from "./phaser/desert";
import ForestScene from "./phaser/forest";
import CaveScene from "./phaser/cave";
import CityScene from "./phaser/city";


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
        <SaveMenu/>
        <div id="phaser-box">
          <div id="phaser"></div>
        </div>
        <Footer />
     
    </Router> 
  );

//Door Modal Scene
import DoorModal from "./phaser/prefabs/doormodal";

class App extends Component {
  constructor (props) {
    super(props)  
    this.state = {
      player:{},
      initialize: true,
      game: {
        type: Phaser.AUTO,
        width: 750,
        height: 600,
        zoom: 1,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false // set to true to view zones
            }
        },
        scene: [
          BootScene, 
          WorldScene,
          DesertScene,
          ForestScene,
          CaveScene,
          CityScene,
          BattleScene,
          UIScene,
          DoorModal
        ]
      }
    }
    this.handler = this.handler.bind(this)
  }

  handler(playerObj) {
    this.setState({
      player: playerObj
    })
  }

  render(){
    console.log("MAIN GAME STATE:: ", this.state);
    const { initialize, game } = this.state
    return (
      <>
         {/* <Security issuer='https://dev-243399.okta.com/oauth2/default'
                    clientId='0oa33m68qMWbxYgrm4x6'
                    redirectUri={window.location.origin + '/implicit/callback'} >
            <Route path='/' exact={true} component={Home}/>
            <SecureRoute path='/protected' component={Menu}/>
            <Route path='/implicit/callback' component={LoginCallback} />
          </Security> */}
        <div>
          <div>
              <Navbar bg="dark" variant="dark">
                  <Navbar.Brand href="#home">Tamagotchi simulator</Navbar.Brand>
                  <ul><LoginPage path="/login" component={LoginPage} handler = {this.handler}/></ul>
              </Navbar>
          </div>
          
         
            {/* <Save/> */}
          </div>
          <SaveMenu />
          <div id="phaser-box">
            <IonPhaser game={game} initialize={initialize} />
          </div>
          <Footer />
      </> 
    )
  }

}

export default App;