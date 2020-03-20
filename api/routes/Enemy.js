const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const enemySchema = new Schema({
    name: "",
    health: 2,
    level: 1,
    attackPower: 2,
    EXP: 5
})

const Enemy = mongoose.model("Enemy", enemySchema)

module.exports = Enemy;