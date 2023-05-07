const express = require('express');
const expenseController = require('../controllers/expenseController')
const checkLogin = require("../middlewares/checkLogin");

const router = express.Router();
const app = express();


//creating expense




router.post("/", checkLogin, expenseController.createExpense);

//getting all expenses
router.get("/", expenseController.getAllExpenses);

//getting all expenses by month
router.get("/month", checkLogin, expenseController.getExpensesByMonth);


//getting an individual expense
router.get("/:id", expenseController.getExpenseById);

//updating an individual expense
router.put("/:id", checkLogin, expenseController.updateExpense);

//deleting an individual expense
router.delete("/:id", checkLogin, expenseController.deleteExpense);

module.exports = router;