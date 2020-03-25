var express = require('express');
var router = express.Router();
const playerController = require("../../controllers/playerController.js");

router.route("/")
    .get(playerController.findById)

module.exports = router;