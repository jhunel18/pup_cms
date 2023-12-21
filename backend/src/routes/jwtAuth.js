const { Router } = require('express')
const authController = require('../controller/authController');

const router = new Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

module.exports = router;