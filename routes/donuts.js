var express = require('express'); 
const donuts_controlers= require('../controllers/donuts'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', donuts_controlers.donuts_view_all_Page ); 
module.exports = router; 