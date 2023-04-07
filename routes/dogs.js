var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dogs', { title: 'Search results Dogs' });
});

module.exports = router;
