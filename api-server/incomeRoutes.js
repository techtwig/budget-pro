const express = require('express');
const bodyParser = require('body-parser');
const {Income}= require('./schemas/incomeSchema');
const {Budget} = require("./schemas/budgetSchema");
const {Expense} = require("./schemas/expenseSchema");
const checkLogin = require("./middlewares/checkLogin");
const router = express.Router();
const app = express();
app.use(bodyParser.json());

//creating income
router.post("/", checkLogin, async (req, res) => {
    try{
        const income = req.body;
        const incomeDocument =  new Income(income);
        console.log(incomeDocument)
        await incomeDocument.save();
        res.json({"message": "Income added successfully"});
    }catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});

//getting all incomes
router.get("/",async (req,res)=>{
    try{
        const allIncomes = await Income.find({});
        res.send(allIncomes);
        if(!allIncomes){
            res.send({message:'No expenses found'});
        }
    }catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});

//getting all incomes by month
router.get("/month",async (req,res)=>{
    try{
        const {month}= req.query;
        const allIncomes = await Income.find({income_month:month});
        res.send(allIncomes);
        if(!allIncomes){
            res.send({message:'No expenses found for this month'});
        }
    }catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});

//getting an individual Income
router.get("/:id",async (req,res)=>{
    try{
        const income = await Income.findOne({_id: req.params.id})
        res.send(income);
        if(!income){
            res.send({message:'Expense Not found'});
        }
    }catch (e) {
        res.status(500).send('Something went wrong!!!');
    }
});

//updating an individual Income
router.put("/:id",checkLogin, async (req, res)=>{
    try{
        const updatedIncome = await Income.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
            })
        res.send(updatedIncome);
    }catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});

//deleting an individual Income
router.delete("/:id",checkLogin, async (req, res)=>{
    try{
        const deletedIncome = await Income.deleteOne({_id: req.params.id});
        res.send(deletedIncome);
    }catch (e) {
        res.status(500).send('Something went wrong!!');
    }
});

module.exports = router;
