var Donuts = require('../models/donuts');
const donuts = require('../models/donuts');
//module.exports = mongoose.model("Donuts", donutSchema)

exports.donuts_list = async function(req, res) { 
    try{ 
        theDonuts = await Donuts.find(); 
        res.send(theDonuts); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

exports.donuts_view_all_Page = async function(req, res) { 
    try{ 
        theDonuts = await donuts.find(); 
        res.render('donuts', { title: 'Donut Search Results', results: theDonuts}); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

exports.donuts_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Donuts(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.donut_type = req.body.donut_type; 
    document.quantity = req.body.quantity; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Donuts.
exports.donuts_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Donuts detail: ' + req.params.id);
};
// Handle Costume delete form on DELETE.
exports.donuts_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Donuts delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.donuts_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Donuts update PUT' + req.params.id);
};