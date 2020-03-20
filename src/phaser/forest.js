//DESERT MAP && MOVEMENT CODE

import Phaser from "phaser";
import tileMap from '../assets/forest/Forest.json';
import hiDefGraves from '../assets/forest/tilesheets/d6qnbs4-c4ff2415-2303-4298-98c8-21f24187b9eb.png';
import landSprites from '../assets/forest/tilesheets/d9xkdpm-a3f22a0a-77e9-4aa5-999c-53bab01d0fa4.png';
import gnarlyTrees from '../assets/forest/tilesheets/dapf6nc-562c87b7-1de8-45c2-979f-18e7aa8b98ad.png';
import gravesSprites from '../assets/forest/tilesheets/graves-shadow_1.png';
import treesOne from '../assets/forest/tilesheets/mv_trees_by_schwarzenacht-dazcdmq-1.png';
import treesTwo from '../assets/forest/tilesheets/pandamaru_mv_nature1_by_schwarzenacht-d9k7n23.png';
import greenerySprites from '../assets/forest/tilesheets/rpg_maker__grass__flowers_and_windows_tileset_by_xxjapozeroxx-dbpxkvy.png';
import charSprites from '../assets/RPG_assets.png';
//console.log("tileMap:: ", tileMap);

let ForestScene = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function ForestScene ()
    {
        Phaser.Scene.call(this, { key: 'ForestScene' });
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
        this.load.image('land', landSprites);
        this.load.image('greenery', greenerySprites);
        this.load.image('treesone', treesOne);
        this.load.image('treestwo', treesTwo);
        this.load.image('treesthree', gnarlyTrees);
        this.load.image('gravesone', hiDefGraves);
        this.load.image('gravestwo', gravesSprites);
        //console.log("this.load.image('tiles', rockSprites):: ",this.load.image('tiles', rockSprites));
        // our two characters
        this.load.spritesheet('player', charSprites, { frameWidth: 32, frameHeight: 32 });
        //MAKE IT TWICE AS BIG; UTILIZE SPRITESHEET ALREADY THERE
    },
    create: function ()
    {
        // create the map
        let map = this.make.tilemap({ key: 'map' });
        
        // Map tilesets; Param1: Name of the tilemap in tiled (found in json); Param2: ame defined in tilemap load
        let landTiles = map.addTilesetImage('d9xkdpm-a3f22a0a-77e9-4aa5-999c-53bab01d0fa4', 'land');
        let greeneryTiles = map.addTilesetImage('rpg_maker__grass__flowers_and_windows_tileset_by_xxjapozeroxx-dbpxkvy', 'greenery');
        let treesOneTiles = map.addTilesetImage('mv_trees_by_schwarzenacht-dazcdmq-1', 'treesone');
        let treesTwoTiles = map.addTilesetImage('pandamaru_mv_nature1_by_schwarzenacht-d9k7n23', 'treestwo');
        let treesThreeTiles = map.addTilesetImage('dapf6nc-562c87b7-1de8-45c2-979f-18e7aa8b98ad', 'treesthree');
        let gravesOneTiles = map.addTilesetImage('d6qnbs4-c4ff2415-2303-4298-98c8-21f24187b9eb', 'gravesone');
        let gravesTwoTiles = map.addTilesetImage('graves-shadow_1', 'gravestwo');
        // console.log("Phaser.Cache:: ", Phaser.Cache);
        // console.log("map:: ", map);
        
        // creating the layers
        //FLOOR LAYER 1 -- Param1: Name of the layer in JSON Object; Param2: map names used in that layer
        let floor1 = map.createStaticLayer('Tile Layer 3', [
            landTiles, 
            greeneryTiles, 
            treesOneTiles, 
            treesTwoTiles, 
            treesThreeTiles, 
            gravesOneTiles, 
            gravesTwoTiles], 0, 0);
        let floor2 = map.createStaticLayer('Tile Layer 7', [
            landTiles, 
            greeneryTiles, 
            treesOneTiles, 
            treesTwoTiles, 
            treesThreeTiles, 
            gravesOneTiles, 
            gravesTwoTiles], 0, 0);
        let floor3 = map.createStaticLayer('Tile Layer 1', [
            landTiles, 
            greeneryTiles, 
            treesOneTiles, 
            treesTwoTiles, 
            treesThreeTiles, 
            gravesOneTiles, 
            gravesTwoTiles], 0, 0);
        let floor4 = map.createStaticLayer('Tile Layer 4', [
            landTiles, 
            greeneryTiles, 
            treesOneTiles, 
            treesTwoTiles, 
            treesThreeTiles, 
            gravesOneTiles, 
            gravesTwoTiles], 0, 0);
        let floor5 = map.createStaticLayer('Tile Layer 5', [
            landTiles, 
            greeneryTiles, 
            treesOneTiles, 
            treesTwoTiles, 
            treesThreeTiles, 
            gravesOneTiles, 
            gravesTwoTiles], 0, 0);
        let floor6 = map.createStaticLayer('Tile Layer 2', [
            landTiles, 
            greeneryTiles, 
            treesOneTiles, 
            treesTwoTiles, 
            treesThreeTiles, 
            gravesOneTiles, 
            gravesTwoTiles], 0, 0);
        let floor7 = map.createStaticLayer('Tile Layer 9', [
            landTiles, 
            greeneryTiles, 
            treesOneTiles, 
            treesTwoTiles, 
            treesThreeTiles, 
            gravesOneTiles, 
            gravesTwoTiles], 0, 0);
        let floor8 = map.createStaticLayer('Tile Layer 6', [
            landTiles, 
            greeneryTiles, 
            treesOneTiles, 
            treesTwoTiles, 
            treesThreeTiles, 
            gravesOneTiles, 
            gravesTwoTiles], 0, 0);
        let floor9 = map.createStaticLayer('Tile Layer 8', [
            landTiles, 
            greeneryTiles, 
            treesOneTiles, 
            treesTwoTiles, 
            treesThreeTiles, 
            gravesOneTiles, 
            gravesTwoTiles], 0, 0);
        let collider = map.createStaticLayer('Obstacles', [
            landTiles, 
            greeneryTiles, 
            treesOneTiles, 
            treesTwoTiles, 
            treesThreeTiles, 
            gravesOneTiles, 
            gravesTwoTiles], 0, 0);
        
        // make all tiles in obstacles collidable
        collider.setCollisionByExclusion([-1]);
        
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
        this.player = this.physics.add.sprite(550, 680, 'player', 15);
        
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

export default ForestScene;