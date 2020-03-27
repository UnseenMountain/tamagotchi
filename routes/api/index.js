const router = require("express").Router()
const petRoutes = require("./pets")
const enemyRoutes = require("./enemies")
const playerRoutes = require("./players")
// const itemRoutes = require("./items")

router.use("/pets", petRoutes)
router.use("/enemies", enemyRoutes)
router.use("/players", playerRoutes)
// router.use("/items", itemRoutes)

module.exports = router