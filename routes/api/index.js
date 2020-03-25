const router = require("express").Router()
const petRoutes = require("./pets")
const enemyRoutes = require("./enemies")
const playerRoutes = require("./players")

router.use("/pets", petRoutes)
router.use("/enemies", enemyRoutes)
router.use("/players", playerRoutes)

module.exports = router