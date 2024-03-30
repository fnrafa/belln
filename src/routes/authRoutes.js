const router = require('express').Router();
const authValidate = require("../api/validations/authValidator");
const controller = require('../api/controllers/authController');
router.post('/register', authValidate.Register, controller.register);
router.post('/login', authValidate.Login, controller.login);
module.exports = router;