var Dog = require('../models/dog');

// List of all Costumes
exports.dog_list = async function(req, res) {
    try{
        theDogs = await dog.find();
        res.send(theDogs);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
    };



//List of all the Dogs
exports.dog_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Dog list');
    };
    // for a specific Costume.
    exports.dog_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Dog detail: ' + req.params.id);
    };
    // Handle Costume create on POST.
    exports.dog_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Dog create POST');
    };
    // Handle Costume delete form on DELETE.
    exports.dog_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Dog delete DELETE ' + req.params.id);
    };
    // Handle Costume update form on PUT.
    exports.dog_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Dog update PUT' + req.params.id);
    };




    
    