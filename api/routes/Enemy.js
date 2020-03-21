const router = require("express").Router();
const enemyController = require("../../controllers/enemyController");

// Matches with "/api/books"
router.route("/enemy")
    .get(enemyController.findAll)
    .post(enemyController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(enemyController.findById)
    .put(enemyController.update)
//   .delete(booksController.remove);

module.exports = router;