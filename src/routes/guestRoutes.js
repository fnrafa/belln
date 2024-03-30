const controller = require("../api/controllers/guestController");
const router = require('express').Router();
router.get('/category', controller.getCategory);
router.get('/item', controller.getItem);
module.exports = router;