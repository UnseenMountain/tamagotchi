import React from 'react';
import ReactDOM from 'react-dom';
import Phaser from "phaser";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Put this and config in own file; use switch statement
//to change between pages (???)
import DesertScene from "./phaser/desert";
import ForestScene from "./phaser/forest";
import CaveScene from "./phaser/cave";
import CityScene from "./phaser/city";

export const config = {
    type: Phaser.AUTO,
    parent: 'phaser',
    width: 320,
    height: 240,
    zoom: 2,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false // set to true to view zones
        }
    },
    scene: CityScene
  };
  
const game = new Phaser.Game(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
