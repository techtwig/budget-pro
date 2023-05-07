const express = require('express');
const incomeController = require('../controllers/incomeController')
const checkLogin = require("../middlewares/checkLogin");


const router = express.Router();
const app = express();


//creating income
router.post("/", checkLogin, incomeController.createIncome);

//getting all incomes
router.get("/", incomeController.getAllIncomes);

//getting all incomes by month
router.get("/month", checkLogin, incomeController.getAllIncomeByMonth);

//getting an individual Income
router.get("/:id",);

//updating an individual Income
router.put("/:id", checkLogin, incomeController.updateIncome);

//deleting an individual Income
router.delete("/:id", checkLogin, incomeController.deleteIncome);

module.exports = router;
