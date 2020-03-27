var express = require('express');
var router = express.Router();
const playerController = require("../../controllers/playerController.js");

//If player has an Id, get player by ID; if not, create one 
router
    .route("/")
    .get(playerController.findAll)
    .post(playerController.create)

router
    .route("/:id")
    .get(playerController.findById)
    .post(playerController.create)
    .put(playerController.update)

module.exports = router;