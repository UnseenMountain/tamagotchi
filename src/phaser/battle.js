import Phaser from "phaser";
import PlayerCharacter from "./prefabs/playercharacter";
import Enemy from "./prefabs/enemy";
import desertBG from '../assets/images/battle_backgrounds/desert.jpg';

// console.log("tileMap:: ", tileMap);
// console.log("tileSprites:: ", tileSprites);

let BattleScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function BattleScene ()
    {
        Phaser.Scene.call(this, { key: "BattleScene" });
    },
    preload() {
        this.load.image('background', desertBG);//the back ground image for the scene
    },
    create: function ()
    {    
        this.cameras.main.setBounds(0, 0, 4000, 4000);
        this.physics.world.setBounds(0, 0, 4000, 4000);
        this.add.image(0, 0, 'background').setOrigin(0).setScale(.15);
        this.startBattle();
        // on wake event we call startBattle too
        this.sys.events.on('wake', this.startBattle, this);             
    },
    startBattle: function() {
        // player character - warrior
        let warrior = new PlayerCharacter(this, 230, 300, "player", 4, "Warrior", 100, 20);        
        this.add.existing(warrior);           
        
        //TO DO; MAKE IT SO THIS CAN BE PASSED A SPECIFIC VALUE
            //BE IT A RANDOM ENEMY FROM THE DB
            //OR A SPECIFIC ENEMY FROM EN EVENT
        let dragonblue = new Enemy(this, 570, 180, "dragonblue", null, "Basic Automaton", 50, 3);
        this.add.existing(dragonblue);
        
        let dragonOrange = new Enemy(this, 500, 370, "dragonorrange", null,"Toxic Root", 50, 3);
        this.add.existing(dragonOrange);
        
        // array with heroes
        this.heroes = [ warrior ];
        // array with enemies
        this.enemies = [ dragonblue, dragonOrange ];
        // array with both parties, who will attack
        this.units = this.heroes.concat(this.enemies);
        
        this.index = -1; // currently active unit
        
        this.scene.run("UIScene");        
    },
    nextTurn: function() {  
        // if we have victory or game over
        if(this.checkEndBattle()) {           
            this.endBattle();
            return;
        }
        do {
            // currently active unit
            this.index++;
            // if there are no more units, we start again from the first one
            if(this.index >= this.units.length) {
                this.index = 0;
            }            
        } while(!this.units[this.index].living);
        // if its player hero
        if(this.units[this.index] instanceof PlayerCharacter) {
            // we need the player to select action and then enemy
            this.events.emit("PlayerSelect", this.index);
        } else { // else if its enemy unit
            // pick random living hero to be attacked
            let r;
            do {
                r = Math.floor(Math.random() * this.heroes.length);
            } while(!this.heroes[r].living) 
            // call the enemy's attack function 
            this.units[this.index].attack(this.heroes[r]);  
            // add timer for the next turn, so will have smooth gameplay
            this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
        }
    },     
    // check for game over or victory
    checkEndBattle: function() {        
        let victory = true;
        // if all enemies are dead we have victory
        for(let i = 0; i < this.enemies.length; i++) {
            if(this.enemies[i].living)
                victory = false;
        }
        let gameOver = true;
        // if all heroes are dead we have game over
        for(let i = 0; i < this.heroes.length; i++) {
            if(this.heroes[i].living)
                gameOver = false;
        }
        return victory || gameOver;
    },
    // when the player have selected the enemy to be attacked
    receivePlayerSelection: function(action, target) {
        if(action == "attack") {            
            this.units[this.index].attack(this.enemies[target]);              
        }
        // next turn in 3 seconds
        this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });        
    },    
    endBattle: function() {       
        // clear state, remove sprites
        this.heroes.length = 0;
        this.enemies.length = 0;
        for(let i = 0; i < this.units.length; i++) {
            // link item
            this.units[i].destroy();            
        }
        this.units.length = 0;
        // sleep the UI
        this.scene.sleep('UIScene');
        // return to WorldScene and sleep current BattleScene
        this.scene.switch('WorldScene');
    }
});

export default BattleScene;