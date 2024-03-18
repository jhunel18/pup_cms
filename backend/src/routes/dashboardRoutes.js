const { Router } = require('express')
const dashboardController = require('../controller/dashboardController');
const validInfo = require('../middleware/validInfo');
const authorization = require('../middleware/authorization');


const router = new Router();

router.get("/", authorization, dashboardController.dashboard);

module.exports = router;
