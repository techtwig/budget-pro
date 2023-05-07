const express = require('express');

const router = express.Router();
const app = express();
const userController=require('../controllers/userController')
app.use(express.json());


//creating users SIGN UP
router.post("/", userController.signup);

//LOGIN
router.post("/login",userController.login)

module.exports = router;