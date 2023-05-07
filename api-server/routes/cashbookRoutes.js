const express = require('express');
const cashbookController=require('../controllers/cashbookController')
const checkLogin = require("../middlewares/checkLogin");

const router = express.Router();
   

router.get("/", checkLogin, cashbookController.getCashbook);
module.exports = router;
