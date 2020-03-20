var mongoose = require("mongoose");


var PetSchema = new mongoose.Schema({

    pet: "",
    health: 5,
    hatched: false,
    level: 1,
    attackPower: 3,
    multiplayer: 1.5

})

var Pet = mongoose.model("Pet", PetSchema);


module.export = Pet;
