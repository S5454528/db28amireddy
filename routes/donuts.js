var express = require('express'); 
const donuts_controlers= require('../controllers/donuts'); 
var router = express.Router();

/* GET donuts */
router.put('/donuts/:id', donuts_controlers.donuts_update_put);

 
/* GET donutss */ 
router.get('/', donuts_controlers.donuts_view_all_Page ); 
//module.exports = router; 

//GET request for one donuts. 
router.get('/donuts/:id',donuts_controlers.donuts_detail); 

/* GET detail donuts page */ 
router.get('/detail', donuts_controlers.donuts_view_one_Page);  

/* GET create donuts page */ 
router.get('/create', donuts_controlers.donuts_create_Page); 
 
/* GET create update page */ 
router.get('/update', donuts_controlers.donuts_update_Page); 

/* GET create donuts page */ 
router.get('/delete', donuts_controlers.donuts_delete_Page);
module.exports = router;