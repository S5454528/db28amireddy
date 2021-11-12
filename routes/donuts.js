var express = require('express'); 
const donuts_controlers= require('../controllers/donuts'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.put('/donuts/:id', donuts_controlers.donuts_update_put); 
module.exports = router; 