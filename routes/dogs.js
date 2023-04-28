var express = require('express');
const dog_Controlers = require('../controllers/dog');
var router = express.Router()

router.get('/detail', dog_Controlers.Dog_view_one_Page)

/* GET create dog page */
router.get('/create', dog_Controlers.Dog_create_Page);

const secured = (req,res,next) => {
  if(req.user){
    return next()
  }
  req.session.returnTo = req.originalUrl;
  res.redirect('/login');
}

/* GET create update page */
router.get('/update', secured, dog_Controlers.Dog_update_Page);

/* GET delete dog page */
router.get('/delete', dog_Controlers.Dog_delete_Page);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dogs', { title: 'Search results Dogs' });
});
router.get('/Dog/:id', dog_Controlers.Dog_detail)
module.exports = router;
