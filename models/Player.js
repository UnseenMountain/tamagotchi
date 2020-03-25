var mongoose = require("mongoose");

var PlayerSchema = new mongoose.Schema({

    playerId: { type: String },
    level: { type: Number, default: 1 },
    stats: { type: Object },
    pets: { type: Object },
    inventory: { type: Object, default: null },

})

var Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;