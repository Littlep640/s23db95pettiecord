var express = require('express');
const dog_Controlers = require('../controllers/dog');
var router = express.Router()

router.get('/detail', dog_Controlers.Dog_view_one_Page)

/* GET create dog page */
router.get('/create', dog_Controlers.Dog_create_Page);

/* GET create update page */
router.get('/update', dog_Controlers.Dog_update_Page);

/* GET delete dog page */
router.get('/delete', dog_Controlers.Dog_delete_Page);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dogs', { title: 'Search results Dogs' });
});
router.get('/Dog/:id', dog_Controlers.Dog_detail)
module.exports = router;
