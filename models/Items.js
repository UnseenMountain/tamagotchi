var mongoose = require("mongoose");

var ItemsSchema = new mongoose.Schema({

    name: { type: String },
    effect: { type: String },
    equippable: { type: Boolean, deafult: false },
    equiptarget: { type: String },
    power: { type: Number },
    defense: { type: Number }


})

var Items = mongoose.model("Items", ItemsSchema);

module.exports = Items;