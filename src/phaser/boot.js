import Phaser from "phaser";
import charSprites from '../assets/RPG_assets.png';
import dragonB from '../assets/creatures/capturecreatures/AutomatonBase.png';
import dragonO from '../assets/creatures/capturecreatures/ToxicRoot.png';
import DesertScene from "./desert";
import WorldScene from "./worldmap";

let BootScene = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function BootScene ()
    {
        Phaser.Scene.call(this, { key: 'BootScene' });
    },
    preload: function ()
    {
        // enemies
        this.load.image("dragonblue",dragonB);
        this.load.image("dragonorrange", dragonO);
    },

    create: function ()
    {
        // start the WorldScene
        // console.log("WorldScene:: ", WorldScene);
        this.scene.start("WorldScene");
    }
});

export default BootScene;