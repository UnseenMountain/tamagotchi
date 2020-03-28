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

let BootScene = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function BootScene ()
    {
        Phaser.Scene.call(this, { key: 'BootScene' });
    },
    preload: function ()
    {
        //OR "THIS" HERE 
        //LOADING PROGRESS BAR -- JUST LOAD EVERYTHING HERE
        var progress = this.add.graphics();
        // this.load.image("loadGif", loadGif);
        // const loading = this.add.image(400, 150, "loadGif");

        this.load.on('progress', function (value) {
    
            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, 270, 800 * value, 60);
    
        });
    
        this.load.on('complete', function () {
    
            progress.destroy();
            // loading.destroy();
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
    },

    create: function ()
    {
        //LOADING SCREEN IF NEEDED
        // start the current Scene
        this.scene.start("WorldScene");
        var playerObj = document.getElementById("phaser").getAttribute("player");
        console.log("Player obj in IonPhaser:: ", playerObj);
        //AFTER DB STUFF ADDED::
            //start at imported || WorldScene
    }
});

export default BootScene;