import axios from "axios";

export default {
  // Gets the player with the given id
  getPlayer: function(playerId) {
    return axios.get("/api/players/" + playerId);
  },//ON LOGIC SIDE; IF PLAYER EXISTS, GET ALL CREATURE DATA, ITEM DATA, LEVEL MULTIPLIERS, STATS, MODIFIERS, ETC
  // Creates a player with the new id if the id doesn't exist
  createPlayer: function(playerId) {
    return axios.post("/api/players/" + playerId);
  },
  //Saves player state to the DB by id
  updatePlayer: function(playerData) {
    return axios.put("/api/players/" + playerData.playerId, playerData);
  },

  //vvv~~May need to be post requests~~vvv
  // Saves new items to the items object in the database (updating existing object)
  saveItem: function(bookData) {
    return axios.put("/api/books", bookData);
  },
  // Saves new pets to the pets object in the database (updating existing object)
  savePet: function(bookData) {
    return axios.put("/api/books", bookData);
    //SAVES FROM OBJECT CREATED BY PET/ENEMY REQUEST
  },
  // Updates equipped items to the array in the player db -- REMEMBER TO UPDATE PLAYER STATS
  equipItem: function(bookData) {
    return axios.put("/api/books", bookData);
  },
  // Updates equipped pets to the object in the player db
  equipPet: function(bookData) {
    return axios.put("/api/books", bookData);
    //SAVES FROM SAVED PETS
  },
  // Updates unequipped items to the array in the player db -- REMEMBER TO UPDATE PLAYER STATS
  unequipItem: function(bookData) {
    return axios.put("/api/books", bookData);
  }, 
  // Updates unequipped pets to the object in the player db
  unequipPet: function(bookData) {
    return axios.put("/api/books", bookData);
  },//^^^~~May need to be post requests~~^^^


  // Deletes one of the item with the given name
  deleteItem: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Deletes the creature with the given name [MAKE A FUNCTION TO ADD NUMBER TO 
  //CAPTURED CREATURES NAMES ;; EVENTUALLY: WAY FOR PLAYERS TO NAME CREATURES]
  deletePet: function(id) {
    return axios.delete("/api/books/" + id);
  }
};

//ON PET/ENEMY REQUEST::
  //Get a creature's data from the DB;
    //Apply a level modifier based on level, map, maybe char level
  //-->PASSED BACK HERE WHEN SAVEPET CALLED

//ON ITEM REQUEST; 
  //Get and save an item's data directly from the db

//BATTLE REQUESTS::
  //GET CURRENTLY EQUIPPED PETS
  //GET 

//EQUIPPING PETS ~
  //Either:
    //An array with max length 3 that updates
    //OR - all creatures in an object, the first three creatures always go in