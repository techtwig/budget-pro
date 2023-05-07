const express = require('express');
const budgetController=require('../controllers/budgetController')
const checkLogin = require("../middlewares/checkLogin");
const router = express.Router();
const app = express();
app.use(express.json());

//creating budget
router.post("/", checkLogin,budgetController.createBudget);

//getting all budgets
router.get("/", budgetController.allBudgets);

//getting all incomes by month
router.get("/month",checkLogin,budgetController.getBudgetsByMonth);

//getting an individual budget
router.get("/:id",budgetController.getBudgetById);

//updating an individual budget
router.put("/:id", checkLogin,budgetController.updateBudget);

//deleting an individual budget
router.delete("/:id", checkLogin,budgetController.deleteBudget);

module.exports = router;