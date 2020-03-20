//DESERT MAP && MOVEMENT CODE

import Phaser from "phaser";
import tileMap from '../assets/city/City.json';
import bldgOne from '../assets/city/tilesheets/bldg.png';
import bldgTwo from '../assets/city/tilesheets/CyberTileA4.png';
import bldgThree from '../assets/city/tilesheets/industrial.png';
import bldgFour from '../assets/city/tilesheets/carsetc.png';
import bldgFive from '../assets/city/tilesheets/signs.png';
import militaryBldgs from '../assets/city/tilesheets/JGSDF_garage.png';
import slums from '../assets/city/tilesheets/Houses_Slum.png';
import dump from '../assets/city/tilesheets/wreckage.png';
import bike from '../assets/city/tilesheets/bike.png';
import grime from '../assets/city/tilesheets/blood_wall02.png';
import chars from '../assets/city/tilesheets/chars_city.png';
import charSprites from '../assets/RPG_assets.png';
//console.log("tileMap:: ", tileMap);

let CityScene = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function CityScene ()
    {
        Phaser.Scene.call(this, { key: 'CityScene' });
    },
    preload: function ()
    {
        console.log("I'M RUNNING");
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
        this.load.image('bldgOne', bldgOne);
        this.load.image('bldgTwo', bldgTwo);
        this.load.image('bldgThree', bldgThree);
        this.load.image('bldgFour', bldgFour);
        this.load.image('bldgFive', bldgFive);
        this.load.image('militaryBldgs', militaryBldgs);
        this.load.image('slums', slums);
        this.load.image('dump', dump);
        this.load.image('bike', bike);
        this.load.image('grime', grime);
        this.load.image('chars', chars);
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
        let bldgOneTiles = map.addTilesetImage('bldg', 'bldgOne');
        let bldgTwoTiles = map.addTilesetImage('CyberTileA4', 'bldgTwo');
        let bldgThreeTiles = map.addTilesetImage('industrial', 'bldgThree');
        let bldgFourTiles = map.addTilesetImage('carsetc', 'bldgFour');
        let bldgFiveTiles = map.addTilesetImage('signs', 'bldgFive');
        let militaryBldgsTiles = map.addTilesetImage('JGSDF_garage', 'militaryBldgs');
        let slumsTiles = map.addTilesetImage('Slum', 'slums');
        let dumpTiles = map.addTilesetImage('wreckage', 'dump');
        let bikeTiles = map.addTilesetImage('bike', 'bike');
        let grimeTiles = map.addTilesetImage('blood_wall02', 'grime');
        let charsTiles = map.addTilesetImage('chars_city', 'chars');
        // console.log("Phaser.Cache:: ", Phaser.Cache);
        // console.log("map:: ", map);
        
        // creating the layers
        //FLOOR LAYER 1 -- Param1: Name of the layer in JSON Object; Param2: map names used in that layer
        let floor1 = map.createStaticLayer('Tile Layer 1', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
        let floor1pt5 = map.createStaticLayer('Tile Layer 1.5', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
        let floor10 = map.createStaticLayer('Tile Layer 10', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
        let floor11 = map.createStaticLayer('Tile Layer 11', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
        let floor12 = map.createStaticLayer('Tile Layer 12', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
        let floor2 = map.createStaticLayer('Tile Layer 2', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
        let floor3 = map.createStaticLayer('Tile Layer 3', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
        let floor4 = map.createStaticLayer('Tile Layer 4', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
        let floor6 = map.createStaticLayer('Tile Layer 6', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
        let floor7 = map.createStaticLayer('Tile Layer 7', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
        let floor8 = map.createStaticLayer('Tile Layer 8', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
        let floor9 = map.createStaticLayer('Tile Layer 9', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
        //OVERTILE
        let overtile = map.createStaticLayer('Overtile', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
        let overtileTwo = map.createStaticLayer('Overtile2', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
       //OBSTACLES
        let collider = map.createStaticLayer('Obstacles', [
            bldgOneTiles, 
            bldgTwoTiles, 
            bldgThreeTiles, 
            bldgFourTiles, 
            bldgFiveTiles, 
            militaryBldgsTiles, 
            slumsTiles, 
            dumpTiles, 
            bikeTiles, 
            grimeTiles, 
            charsTiles], 0, 0);
        
        // make all tiles in obstacles collidable
        collider.setCollisionByExclusion([-1]);
        overtile.setDepth(1);
        overtileTwo.setDepth(1);
        
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

export default CityScene;