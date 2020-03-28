import React, {Component} from 'react';
import Phaser from "phaser";
import { IonPhaser } from '@ion-phaser/react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

import Footer from './components/Footer/footer.js';

// import Menu from './components/Menu/menu.js';
// import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';
// import Home from './Home';
import LoginPage from './components/auth/LoginPage';
import SaveMenu from './components/Save/SaveMenu';

//Importing Scenes
// import BootScene from "./phaser/boot";
import BattleScene from "./phaser/battle";
import UIScene from "./phaser/ui";
//Map Scenes
import WorldScene from "./phaser/worldmap";
import DesertScene from "./phaser/desert";
import ForestScene from "./phaser/forest";
import CaveScene from "./phaser/cave";
import CityScene from "./phaser/city";

// //Door Modal Scene
// import DoorModal from "./phaser/prefabs/doormodal";

//Player Object
import PlayerObject from "./phaser/player";

//Level tilemaps
import worldTileMap from './assets/worldmap/WorldMap.json';
import desertTileMap from './assets/desert/Desert_Meteor.json';
import cityTileMap from './assets/city/City.json';
import caveTileMap from './assets/cave/Cave.json';
import forestTileMap from './assets/forest/Forest.json';

//Tile Dependencies
import landBaseOne from './assets/worldmap/tilesheets/castle4.png';
import landBaseTwo from './assets/worldmap/tilesheets/Dungeon_A532.png';
import water from './assets/worldmap/tilesheets/wateranimate2.png';
import forest from './assets/worldmap/tilesheets/Forest.png';
import nature from './assets/worldmap/tilesheets/nature2.png';
import worldOne from './assets/worldmap/tilesheets/World_C32.png';
import worldTwo from './assets/worldmap/tilesheets/WorldIcons.png';
//console.log("tileMap:: ", tileMap);

//Character sprites
import charSprites from './assets/RPG_assets.png';
// import loadGif from './assets/loadingChibi.gif';

//Creatures -- MAYBE LOAD WORLDMAP CREATURES HERE BUT OTHERWISE DELETE LATER
import dragonB from './assets/creatures/capturecreatures/AutomatonBase.png';
import dragonO from './assets/creatures/capturecreatures/WindBunny.png';

// console.log("PlayerObject:: ", PlayerObject.prototype.saveStats);

class App extends Component {
  constructor (props) {
    super(props)  
    this.state = {
      initialize: true,
      player:{},
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

        //MAKE A REACT CHILD
          //PASS 'PLAYER' TO THE CHILD
          //PULL PLAYER IN TO BE LOADED HERE [?]

        //"THIS" HERE IS VERY DIFFERENT FROM::
        scene: [
          {
            init(){
              //"THIS" HERE 
              this.cameras.main.setBackgroundColor('#24252A')
            },
            preload(){
              //OR "THIS" HERE 
                //LOADING PROGRESS BAR -- JUST LOAD EVERYTHING HERE
                let progress = this.add.graphics();
                // this.load.image("loadGif", loadGif);
                // const loading = this.add.image(400, 150, "loadGif");
                let loading = this.add.text(350, 240, 'Loading...', 70);
                this.load.on('progress', function (value) {
                  
                  progress.clear();
                  progress.fillStyle(0xffffff, 1);
                  progress.fillRect(0, 270, 800 * value, 60);
            
                });
            
                this.load.on('complete', function () {
                    //Remove progress bar and loading text
                    progress.destroy();
                    loading.destroy();
                });
                // Load Enemies -- MAYBE LOAD WORLDMAP CREATURES HERE BUT OTHERWISE DELETE LATER
                this.load.image("dragonblue",dragonB);
                this.load.image("dragonorrange", dragonO);
                this.load.spritesheet('player', charSprites, { frameWidth: 32, frameHeight: 32 });
                //Load all tilemaps here & give them a key
                this.load.tilemapTiledJSON('worldmap', worldTileMap);
                this.load.tilemapTiledJSON('desertmap', desertTileMap);
                this.load.tilemapTiledJSON('citymap', cityTileMap);
                this.load.tilemapTiledJSON('cavemap', caveTileMap);
                this.load.tilemapTiledJSON('forestmap', forestTileMap);

                // Worldmap in json format
                this.load.tilemapTiledJSON('worldmap', "worldTilemap");
                // Give tile map identifiers and load them based on import
                this.load.image('landone', landBaseOne);
                this.load.image('landtwo', landBaseTwo);
                this.load.image('water', water);
                this.load.image('forest', forest);
                this.load.image('nature', nature);
                this.load.image('worldone', worldOne);
                this.load.image('worldtwo', worldTwo);
            },
            create(){
         
              if (JSON.parse(localStorage.getItem('saveFile')) !== null){
                let currentSaveObject = JSON.parse(localStorage.getItem('saveFile'));
                console.log("SAVE OBJ::" , currentSaveObject);
                let currentLocation = currentSaveObject.location;
                this.scene.start(currentLocation);
              } else {
                this.scene.start("WorldScene");
              }
                // console.log("THIS:: ", this);

            },
            update() {
              // this.helloWorld.angle += 1;
            },
          }, 
          DesertScene,
          WorldScene,
          ForestScene,
          CaveScene,
          CityScene,
          BattleScene,
          UIScene,
          // DoorModal
        ]
      }
    }
    this.handler = this.handler.bind(this)
  }

  handler(playerObj) {
    const user = playerObj.playerId
    //Update the player object to be the object from the db
      //Saves to localstorage and is immediately pulled back up
    PlayerObject.prototype.saveStats(playerObj /*, user  -- when Phaser isn't being sh*tty*/);
    this.setState({
    
        player: playerObj
      
    })
  }

  render(){
    // console.log("MAIN GAME STATE:: ", this.state);
    const { initialize, game } = this.state;
    // console.log("game::", game);
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