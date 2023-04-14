var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Dog_controller = require('../controllers/dog');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// DOG ROUTES ///
// POST request for creating a Costume.
router.post('/dogs', Dog_controller.Dog_create_post);
// DELETE request to delete Costume.
router.delete('/dogs/:id', Dog_controller.Dog_delete);
// PUT request to update Costume.
router.put('/dogs/:id', Dog_controller.Dog_update_put);
// GET request for one Costume.
router.get('/dogs/:id', Dog_controller.Dog_detail);
// GET request for list of all Costume items.
router.get('/dogs', Dog_controller.Dog_list);

module.exports = router;