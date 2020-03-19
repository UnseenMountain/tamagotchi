//DESERT MAP && MOVEMENT CODE

import Phaser from "phaser";
import tileMap from '../assets/cave/Cave.json';
import loDefCave from '../assets/cave/tilesheets/All.png';
import caveRunner from '../assets/cave/tilesheets/cave_tileset.png';
import hiDefCave from '../assets/cave/tilesheets/cave2.png';
import crystals from '../assets/cave/tilesheets/crystals.png';
import loDefFloor from '../assets/cave/tilesheets/TileA5.png';
import water from '../assets/cave/tilesheets/wateranimate2.png';
import charSprites from '../assets/RPG_assets.png';
//console.log("tileMap:: ", tileMap);

let CaveScene = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function CaveScene ()
    {
        Phaser.Scene.call(this, { key: 'CaveScene' });
    },
    preload: function ()
    {
/*                                                ******* _
                                                *---******* *
                                ~             *-----*******  *
                         ~         ~         *-------*******  }
                        __      _   _!__     *-------*******   }
                   _   /  \_  _/ \  |::| ___ **-----********  *    ~
                 _/ \_/^    \/   ^\/|::|\|:|  **---**** /^\_ *      ~
     ~        /\/  ^ /  ^    / ^ ___|::|_|:|_/\_***** /  ^  \
      `'     /  \  _/ ^ ^   /    |::|--|:|---|  \__/  ^      ^\___
           _/_^  \/  ^    _/ ^   |::|::|:|-::| ^ /_  ^    ^    ^   \_
          /   \^ /    /\ /       |::|--|:|:--|  /  \        ^         \
         /     \/    /  /        |::|::|:|:-:| / ^  \  ^      ^        \
   _Q   / _Q  _Q_Q  / _Q    _Q   |::|::|:|:::|/    ^ \    _Q ~      ^     _.~
  /_\)   /_\)/_/\\)  /_\)  /_\)  |::|::|:|:::|           /_\)           /  \     
_O|/O___O|/O_OO|/O__O|/O__O|/O__________________________O|/O___________[ O ]
/*////////////////////////////[MAP PROGRAMMING]////////////////////////////*/


        // map in json format
        this.load.tilemapTiledJSON('map', tileMap);
        // Load the tile maps & give them identifiers
        this.load.image('lowDefCave', loDefCave);
        this.load.image('lowDefFloor', loDefFloor);
        this.load.image('highDefCave', hiDefCave);
        this.load.image('crystals', crystals);
        this.load.image('caveRunner', caveRunner);
        this.load.image('water', water);
        //console.log("this.load.image('tiles', rockSprites):: ",this.load.image('tiles', rockSprites));
        // our character
        this.load.spritesheet('player', charSprites, { frameWidth: 32, frameHeight: 32 });
        //MAKE IT TWICE AS BIG; UTILIZE SPRITESHEET ALREADY THERE
    },
    create: function ()
    {
        // create the map
        let map = this.make.tilemap({ key: 'map' });
        
        // Map tilesets; Param1: Name of the tilemap in tiled (found in json); Param2: are defined in tilemap load
        let lowDefCaveTiles = map.addTilesetImage('Preston', 'lowDefCave');
        let lowDefFloorTiles = map.addTilesetImage('TileA5', 'lowDefFloor');
        let highDefCaveTiles = map.addTilesetImage('cave2', 'highDefCave');
        let crystalsTiles = map.addTilesetImage('crystals', 'crystals');
        let caveRunnerTiles = map.addTilesetImage('cave_tileset', 'caveRunner');
        let waterTiles = map.addTilesetImage('wateranimate2', 'water');
        // console.log("Phaser.Cache:: ", Phaser.Cache);
        // console.log("map:: ", map);
        
        // creating the layers
        //FLOOR LAYER 1 -- Param1: Name of the layer in JSON Object; Param2: map names used in that layer
        let floor1 = map.createStaticLayer('Tile Layer 1', [
            lowDefCaveTiles, 
            lowDefFloorTiles, 
            highDefCaveTiles, 
            crystalsTiles, 
            caveRunnerTiles, 
            waterTiles], 0, 0);
        let floor2 = map.createStaticLayer('Tile Layer 2', [
            lowDefCaveTiles, 
            lowDefFloorTiles, 
            highDefCaveTiles, 
            crystalsTiles, 
            caveRunnerTiles, 
            waterTiles], 0, 0);
        let floor3 = map.createStaticLayer('Tile Layer 3', [
            lowDefCaveTiles, 
            lowDefFloorTiles, 
            highDefCaveTiles, 
            crystalsTiles, 
            caveRunnerTiles, 
            waterTiles], 0, 0);
        let floor4 = map.createStaticLayer('Tile Layer 4', [
            lowDefCaveTiles, 
            lowDefFloorTiles, 
            highDefCaveTiles, 
            crystalsTiles, 
            caveRunnerTiles, 
            waterTiles], 0, 0);
        //OVERTILE
        let overtile = map.createStaticLayer('Overtile', [
            lowDefCaveTiles, 
            lowDefFloorTiles, 
            highDefCaveTiles, 
            crystalsTiles, 
            caveRunnerTiles, 
            waterTiles], 0, 0);
       //OBSTACLES
        let collider = map.createStaticLayer('Obstacles', [
            lowDefCaveTiles, 
            lowDefFloorTiles, 
            highDefCaveTiles, 
            crystalsTiles, 
            caveRunnerTiles, 
            waterTiles], 0, 0);
        
        // make all tiles in obstacles collidable
        collider.setCollisionByExclusion([-1]);
        overtile.setDepth(1);
        
                                       /*  
        ___________________________¶¶¶¶¶¶
        _______________________¶¶¶¶¶ccee¶¶
        _____________________¶¶¶cccceeaa¶¶
        _________________¶¶¶¶¶cccceeaaa¶¶
        _____________¶¶¶¶¶cccccceeaaaa¶¶
        __¶¶¶¶¶¶¶¶¶¶¶¶cccccceeaaaaaaa¶¶  ~~CHARACTER PROGRAMMING~~ 
        ¶¶¶ccccccccccccceeaaaaaaaaaa¶¶               ``
        __¶¶¶aaaaaaaeeceeeeeaaaaaag¶¶                 \\
        ____¶¶¶¶¶¶aaaaaaaaeeeeeeag¶¶                  //
        ________¶¶¶¶¶¶¶¶aaaaaaeeegg¶¶            ====//
        _________#######¶¶¶¶¶aaaaggg¶¶          //
        ________###|¯|########¶¶aaaaggg¶¶      //
        ______¶¶###|_|###|¯|#####¶¶¶aagggg¶¶  //
        ____¶¶££#########|_|########¶¶¶¶ggg¶¶//
        __¶¶££¶¶#################£££££¶¶¶¶¶ //
        __¶¶££££££#########££££££££¶¶£¶¶   //
        __¶¶¶¶££££££££££££¶¶¶¶¶¶£££££¶¶   //
        _¶§xxx¶¶££££££¶¶¶¶££££££££££££¶¶ //
        _¶§xxx¶¶££££¶¶¶¶¶¶££££££££££££¶¶//
        __¶¶¶¶££££££§xxx¶¶££££££££££££¶¶
        __¶¶££¶¶££££§xxx¶¶££££££££££££¶¶
        __¶¶££¶¶££££¶¶¶¶¶¶££££££££££¶¶
        __¶¶£££¶¶£££££££££¶¶££££££££¶¶
        __¶¶££££¶¶¶£££££££¶¶££££££££¶¶
        _¶¶£££££££¶¶¶¶¶¶££££¶¶££££¶¶££¶¶
        ¶¶££££££££££££££££££££¶¶¶¶££££££¶¶
        _¶¶¶¶¶.__|¶¶¶¶¶¶¶¶¶¶¶¶¶____¶¶¶¶¶¶¶
                             ===*/

        // animation with key 'left', we don't need left and right as we will use one and flip the sprite
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13]}),
            frameRate: 10,
            repeat: -1
        });
        
        // animation with key 'right'
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13] }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { frames: [2, 8, 2, 14]}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 6, 0, 12 ] }),
            frameRate: 10,
            repeat: -1
        });        

        // our player sprite created through the physics system (params measured in pixels)
        this.player = this.physics.add.sprite(180, 220, 'player', 15);
        
        // don't go out of the map
        this.physics.world.bounds.width = map.widthInPixels;
        this.physics.world.bounds.height = map.heightInPixels;
        this.player.setCollideWorldBounds(true);
        
        // don't walk on colliders
        this.physics.add.collider(this.player, collider);

        // limit camera to map
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.roundPixels = true; // avoid tile bleed
    
        // user input
        this.cursors = this.input.keyboard.createCursorKeys();
        
        // where the enemies will be ~~ SOMEWHAT RANDOMIZED; DOESN'T CHANGE
        this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
        for(let i = 0; i < 30; i++) {
            let x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
            let y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
            // parameters are x, y, width, height
            this.spawns.create(x, y, 20, 20);            
        }        
        // add colliders
        this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);
    },
    onMeetEnemy: function(player, zone) {        
        // we move the zone to some other location
        zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
        zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
        
        // shake the world
        this.cameras.main.shake(300);
        
        //[[[  VIP :: CHANGE SO BATTLES ARE RANDOM!!! ]]]
        // start battle 
        //PUT LUKE'S BATTLE CODE HERE
        //&& CHANGE THE STATE TO BATTLE; SHOW THE BATTLE SCREEN 
    },
    update: function (time, delta)
    {
        //console.log(delta);
        // this.controls.update(delta);
    
        this.player.body.setVelocity(0);
        // Horizontal movement
        if (this.cursors.left.isDown)
        {
            this.player.body.setVelocityX(-80);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.setVelocityX(80);
        }

        // Vertical movement
        if (this.cursors.up.isDown)
        {
            this.player.body.setVelocityY(-80);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.body.setVelocityY(80);
        }        

        // Update the animation last and give left/right animations precedence over up/down animations
        if (this.cursors.left.isDown)
        {
            this.player.anims.play('left', true);
            this.player.flipX = true;
        }
        else if (this.cursors.right.isDown)
        {
            this.player.anims.play('right', true);
            this.player.flipX = false;
        }
        else if (this.cursors.up.isDown)
        {
            this.player.anims.play('up', true);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.anims.play('down', true);
        }
        else
        {
            this.player.anims.stop();
        }
    }
    
});

export default CaveScene;