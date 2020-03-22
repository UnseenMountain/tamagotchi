const router = require("express").Router()
const petRoutes = require("./pets")
const enemyRoutes = require("./enemies")


router.use("/pets", petRoutes)
router.use("/enemies", enemyRoutes)

module.exports = router