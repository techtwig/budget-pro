const express = require('express');
const bodyParser = require('body-parser');
const {Expense}= require('./schemas/expenseSchema');
const checkLogin = require("./middlewares/checkLogin");
const router = express.Router();
const app = express();
app.use(bodyParser.json());

//creating expense
router.post("/", checkLogin, async (req, res) => {
    try{
        const expense = req.body;
        const expenseDocument =  new Expense(expense);
        console.log(expenseDocument)
        await expenseDocument.save();
        res.json({"message": "Expense added successfully"});
    }catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});

//getting all expenses
router.get("/",async (req,res)=>{
    try{
        const {month}= req.query;
        console.log('month', month)
        const allExpenses = await Expense.find({});
        res.send(allExpenses);
        if(!allExpenses){
            res.send({message:'No expenses found'});
        }
    }catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});

//getting all expenses by month
router.get("/month",async (req,res)=>{
    try{
        const {month}= req.query;
        const allExpenses = await Expense.find({expenseMonth:month});
        res.send(allExpenses);
        if(!allExpenses){
            res.send({message:'No expenses found for this month'});
        }
    }catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});


//getting an individual expense
router.get("/:id",async (req,res)=>{
    try{
        const expense = await Expense.findOne({_id: req.params.id})
        res.send(expense);
        if(!expense){
            res.send({message:'Expense Not found'});
        }
    }catch (e) {
        res.status(500).send('Something went wrong!!!');
    }
});

//updating an individual expense
router.put("/:id", checkLogin, async (req, res)=>{
    try{
        const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
            })
        res.send(updatedExpense);
    }catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});

//deleting an individual expense
router.delete("/:id",checkLogin, async (req, res)=>{
    try{
        const deletedExpense = await Expense.deleteOne({_id: req.params.id});
        res.send(deletedExpense);
    }catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});

module.exports = router;