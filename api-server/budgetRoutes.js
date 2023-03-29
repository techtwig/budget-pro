const express = require('express');
const bodyParser = require('body-parser');
const {Budget}= require('./schemas/budgetSchema');
const {Expense} = require("./schemas/expenseSchema");
const {Income} = require("./schemas/incomeSchema");
const router = express.Router();
const app = express();
app.use(bodyParser.json());

//creating budget
router.post("/", async (req, res) => {
    try{
        const budget = req.body;
        const budgetDocument =  new Budget(budget);
        console.log(budgetDocument)
        await budgetDocument.save();
        res.json({"message": "Budget added successfully"});
    }catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});

//getting all budgets
router.get("/",async (req,res)=>{
    try{
        const allBudgets = await Budget.find({});
        res.send(allBudgets);
        if(!allBudgets){
            res.send({message:'No expenses found'});
        }
    }catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});

//getting all incomes by month
router.get("/month",async (req,res)=>{
    try {
        const {month}= req.query;
        const allBudgets = await Budget.find({budget_month:month});
        res.send(allBudgets);
        if(!allBudgets){
            res.send({message:'No expenses found for this month'});
        }
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});

//getting an individual budget
router.get("/:id",async (req,res)=>{
    try{
        const budget = await Budget.findOne({_id: req.params.id})
        res.send(budget);
        if(!budget){
            res.send({message:'Expense Not found'});
        }
    }catch (e) {
        res.status(500).send('Something went wrong!!!');
    }
});

//updating an individual budget
router.put("/:id", async (req, res)=>{
    try{
        const updatedBudget = await Budget.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
            })
        res.send(updatedBudget);
    }catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});

//deleting an individual budget
router.delete("/:id", async (req, res)=>{
    try{
        const deletedBudget = await Budget.deleteOne({_id: req.params.id});
        res.send(deletedBudget);
    }catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});

module.exports = router;