var express = require('express');
const dog_Controlers = require('../controllers/Dog');
var router = express.Router()

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('dogs', { title: 'Search results Dogs' });
//});
router.get('/Dog/:id', dog_Controlers.Dog_detail)
module.exports = router;
