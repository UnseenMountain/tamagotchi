//React dependency
import React from 'react';
import ReactDOM from 'react-dom';
//Phaser dependency
import Phaser from "phaser";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

//Create config~
const config = {
    type: Phaser.AUTO,
    parent: 'phaser',
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
    scene:   [
        BootScene, 
        WorldScene,
        DesertScene,
        ForestScene,
        CaveScene,
        CityScene,
        BattleScene,
        UIScene
      ]
  };
 //~ and declate it to Phaser 
const game = new Phaser.Game(config);

//Render the DOM
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
