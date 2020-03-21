var mongoose = require("mongoose");


var PetSchema = new mongoose.Schema({

    name: { type: String, default: "pet" },
    health: { type: Number, default: 5 },
    hatched: { type: Boolean, deafult: false },
    level: { type: Number, default: 1 },
    attackPower: { type: Number, default: 3 },
    multiplayer: { type: Number, default: 1.5 }


})

var Pet = mongoose.model("Pet", PetSchema);


module.exports = Pet;
