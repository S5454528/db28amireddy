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
    // {"Donuts_type":"goat", "cost":12, "size":"large"} 
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

exports.donuts_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await donuts.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

exports.donuts_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await donuts.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.donut_type)  
               toUpdate.donut_type = req.body.donut_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.quantity) toUpdate.quantity = req.body.quantity; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle Donuts delete on DELETE. 
exports.donuts_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Donuts.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};

// Handle a show one view with id specified by query 
exports.donuts_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Donuts.findById( req.query.id) 
        res.render('donutsdetail',  
{ title: 'Donuts Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a donuts. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.donuts_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('donutscreate', { title: 'Donuts Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for updating a donuts. 
// query provides the id 
exports.donuts_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Donuts.findById(req.query.id) 
        res.render('donutsupdate', { title: 'Donuts Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.donuts_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Donuts.findById(req.query.id) 
        res.render('donutsdelete', { title: 'donuts Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 