//Phaser dependency
import Phaser from "phaser";
import API from "../utils/API";

let PlayerObject = new Phaser.Class({

    // initialize:
    // function PlayerObject ()
    // {
    //     Phaser.GameObjects.call(this, { key: 'PlayerObject' });
    // },
    //Loads from Localstorage
    loadStats(/*user*/){
        let playerData = JSON.parse(localStorage.getItem('saveFile' /* + user*/));
        console.log("Loaded Data: ", playerData);
        //LOAD FROM THE API
    },
    //Saves to Localstorage
    saveStats(save  /*, user*/){
        delete save._id;
        this.savedPlayer = save;
        let playerId = save.playerId;
        console.log("this.savedPlayer:: ", this.savedPlayer);
            //SEND TO THE API
        localStorage.setItem('saveFile' /* + user*/,JSON.stringify(save));
        console.log("Saved to local Storage::",localStorage);
        //SAVE PLAYER STATS
        API.updatePlayer(playerId, save)
            .then(res => {
                console.log("PLAYER DATA UPDATED");
                //A new player has been created; stats set to default
            })
    },
    savedPlayer: {}
});

export default PlayerObject;