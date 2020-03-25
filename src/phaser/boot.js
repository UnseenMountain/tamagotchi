//Phaser dependency
import Phaser from "phaser";

//Level tilemaps
import worldTileMap from '../assets/worldmap/WorldMap.json';
import desertTileMap from '../assets/desert/Desert_Meteor.json';
import cityTileMap from '../assets/city/City.json';
import caveTileMap from '../assets/cave/Cave.json';
import forestTileMap from '../assets/forest/Forest.json';

//Character sprites
import charSprites from '../assets/RPG_assets.png';

//Creatures -- MAYBE LOAD WORLDMAP CREATURES HERE BUT OTHERWISE DELETE LATER
import dragonB from '../assets/creatures/capturecreatures/AutomatonBase.png';
import dragonO from '../assets/creatures/capturecreatures/ToxicRoot.png';

//IMPORT DB OBJECT
//USING DB OBJECT, PASS CURRENT SCENE INTO::
let currentScene = "WorldScene";

let BootScene = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function BootScene ()
    {
        Phaser.Scene.call(this, { key: 'BootScene' });
    },
    preload: function ()
    {
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
    },

    create: function ()
    {
        //LOADING SCREEN IF NEEDED
        // start the current Scene
        this.scene.start(currentScene);
        //AFTER DB STUFF ADDED::
            //start at imported || WorldScene
    }
});

export default BootScene;