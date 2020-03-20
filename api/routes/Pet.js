const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const petSchema = new Schema({
    pet: "",
    health: 5,
    hatched: false,
    level: 1,
    attackPower: 3,
    multiplayer: 1.5
})

const Pet = mongoose.model("Pet", petSchema)

module.exports = Pet;