const mongoose = require("mongoose");

const db = require("../models");

mongoose.connect(
        prosses.env.MONGOD_URI || "mongodb://localhost/tamagochi"
);

const petSeed = [
    {
        pet: "",
        health: 5,
        hatched: false,
        level: 1,
        attackPower: 3,
        multiplayer: 1.5
    }
]

const enemySeed = [
    {
        name: "",
        health: 2,
        level: 1,
        attackPower: 2,
        EXP: 5
    }
];

module.exports = petSeed;

module.exports = enemySeed;