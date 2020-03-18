var mongoose = require("mongoose");


var EnemySchema = new mongoose.Schema({
    
    
    name: "",
    health: 2,
    level: 1,
    attackPower: 2,
    EXP: 5
});



var Enemy = mongoose.model("enemy",EnemySchema);

module.exports = Enemy;