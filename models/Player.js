var mongoose = require("mongoose");

var PlayerSchema = new mongoose.Schema({

    playerId: { type: String },
    level: { type: Number, default: 1 },
    stats: { type: Object, default: {
        power: 14,
        defense: 10,
    }},
    pets: { type: Object, default: {} },
    inventory: { type: Object, default: {} },
    location: {type: String, default: "WorldScene"}
})

var Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;