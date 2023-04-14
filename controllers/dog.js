var Dog = require('../models/dog');


//List of all the Dogs
exports.Dog_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Dog list');
    };
    // for a specific Costume.
exports.Dog_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try{
        result = await Dog.findById(req.params.id)
        res.send(result)
    }
    catch(error){
        res.status(500)
        res.send(`{"error:" document for id ${req.params.id} not found}`);
    }
    };
    // Handle Costume create on POST.
exports.Dog_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Dog();
    document.breed = req.body.breed;
    document.size = req.body.size;
    document.yrsOfLifeExpectancy = req.body.yrsOfLifeExpectancy;
    try{
        let result = await document.save()
        res.send(result)
    }
    catch(err){
        res.status(500);
        res.send(`{'error':${err}}`);
    }
    };
    // Handle Costume delete form on DELETE.
exports.Dog_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Dog delete DELETE ' + req.params.id);
    };
    // Handle Costume update form on PUT.
exports.Dog_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try{
        let toUpdate = await Dog.findById(req.params.id)
        //Do updates of properties
        if(req.body.breed)
            toUpdate.breed = req.body.breed;
        if(req.body.size)
            toUpdate.size = req.body.size;
        if(req.body.yrsOfLifeExpectancy)
            toUpdate.yrsOfLifeExpectancy = req.body.yrsOfLifeExpectancy;
        let result = await toUpdate.save()
        console.log("Success" + result)
        res.send(result)
    }
    catch(err){
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed}`);
    }
    };

// List of all Costumes
exports.Dog_list = async function(req, res) {
    try{
        theDogs = await Dog.find();
        res.send(theDogs);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
    };

//VIEWS
//HANDLE a show all view
exports.Dog_view_all_Page = async function(req, res){
    try{
        theDogs = await Dog.find();
        res.render('dogs', {title: 'Dogs Search Results', results: theDogs});
    }
    catch(err){
        res.status(500);
        res.send(`{'error: ${err}}`)
    }
};
    
    