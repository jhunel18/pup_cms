const { Router } = require('express')
const authController = require('../controller/authController');
const validInfo = require('../middleware/validInfo');
const authorization = require('../middleware/authorization');


const router = new Router();

router.post("/register", validInfo,  authController.registerUser);
router.post("/login", validInfo, authController.loginUser);
router.get("/is-verify", authorization, authController.isVerify);

module.exports = router;
