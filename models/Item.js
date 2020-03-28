var mongoose = require("mongoose");

var ItemSchema = new mongoose.Schema({

    name: { type: String },
    effect: { type: String },
    equippable: { type: Boolean, default: false },
    equiptarget: { type: String },
    power: { type: Number },
    defense: { type: Number }


})

var Item = mongoose.model("Item", ItemSchema);

module.exports = Item;