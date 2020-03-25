const router = require("express").Router();
const enemyController = require("../../controllers/enemyController");

// Matches with "/api/enemies/"
router.route("/")
    .get(enemyController.findAll)
    .post(enemyController.create);

// Matches with "/api/enemies/:id"
router.route("/:id")
    .get(enemyController.findById)
    .put(enemyController.update)
//   .delete(booksController.remove);

module.exports = router;