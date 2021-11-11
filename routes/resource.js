var express = require('express');
var router = express.Router();

// Require controller modules
var api_controller = require('../controllers/api');
var donuts_controller = require('../controllers/donuts');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// donuts ROUTES ///
// POST request for creating a donuts.
router.post('/donuts', donuts_controller.donuts_create_post);
// DELETE request to delete donuts.
router.delete('/donuts/:id', donuts_controller.donuts_delete);
// PUT request to update donuts.
router.put('/donuts/:id', donuts_controller.donuts_update_put);
// GET request for one donuts.
router.get('/donuts/:id', donuts_controller.donuts_detail);
// GET request for list of all donuts items.
router.get('/donuts', donuts_controller.donuts_list);
/* GET detail donuts page */

module.exports = router;