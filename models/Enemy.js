var mongoose = require("mongoose");


var EnemySchema = new mongoose.Schema({


    name: { type: String, default: "enemy1" },
    health: { type: Number, default: 5 },
    level: { type: Number, default: 1 },
    attackPower: { type: Number, default: 2 },
    EXP: { type: Number, default: 5 }
});



var Enemy = mongoose.model("enemy", EnemySchema);

module.exports = Enemy;