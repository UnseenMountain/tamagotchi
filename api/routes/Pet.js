const router = require("express").Router();
const petController = require("../../controllers/petController");

// Matches with "/api/books"
router.route("/pet")
    .get(petController.findAll)
    .post(petController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(petController.findById)
    .put(petController.update)
//   .delete(booksController.remove);

module.exports = router;