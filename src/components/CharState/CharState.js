import React from "react";
import API from "../../utils/API";

class Character extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            player: {}
        }
        this.updateState = this.updateState.bind(this)
    }

    loadPlayer = (playerId) => {
        //GET PLAYER FROM THE API
        API.getPlayer(playerId)
          .then(res => {
            console.log("API RES::", res)
            if(res.data.length === 0){
              console.log("PLAYER DOES NOT EXIST");
              this.newPlayer(playerId);
            } else {
              console.log("PLAYER EXISTS");
              //Pass the location to Phaser???
              // console.log("res.data[0].location:: ", res.data[0].location);
              //Update player state
              this.setState({player: res.data[0]})
            }}
            )
          .catch(err => console.log(err));
      }
    
      newPlayer = (playerId) => {
        console.log("CREATING NEW PLAYER...");
        //CREATE NEW PLAYER WITH THE API
        API.createPlayer(playerId)
          .then(res => {
            console.log("NEW PLAYER CREATED");
            //A new player has been created; stats set to default
          })
      }
}

export default Character