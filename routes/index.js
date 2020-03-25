var express = require('express');
var router = express.Router();

const apiRoutes = require ("./api")

router.use("/api", apiRoutes);
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;