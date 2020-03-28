const router = require("express").Router();
const enemyController = require("../../controllers/enemyController");
const petController = require("../../controllers/petController");

// Matches with "/api/enemies/"
router.route("/")
    .get(enemyController.findAll)
    .post(enemyController.create);

// Matches with "/api/enemies/:id"
router.route("/:id")
    .get(enemyController.findById)
    .put(enemyController.update)
//   .delete(booksController.remove);

router.route("/")
    .get(petController.findAll)
    .post(petController.create);

    router.route("/:id")
    .get(petController.findById)
    .put(petController.update)

module.exports = router;