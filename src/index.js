import React from 'react';
import ReactDOM from 'react-dom';
import Phaser from "phaser";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DesertScene from "./phaser/desert";
import ForestScene from "./phaser/forest";

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
    scene: ForestScene
  };
  
const game = new Phaser.Game(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
