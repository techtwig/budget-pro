const { Budget } = require('../models/budgetSchema');
const { Category } = require('../models/categorySchema');

exports.createBudget = async (req, res) => {
    try {
        req.body.userId = req.userId

        const categoryName = req.body.category
        const category = await Category.create({
            name: categoryName,
            type: "budget"
        })
        req.body.categoryId = category._id

        const budget = req.body;
        const budgetDocument = new Budget(budget);
   
        await budgetDocument.save();
        res.json({ "message": "Budget added successfully" });
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}

exports.allBudgets = async (req, res) => {
    try {
        const allBudgets = await Budget.find({});
        res.send(allBudgets);
        if (!allBudgets) {
            res.send({ message: 'No expenses found' });
        }
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}


exports.getBudgetsByMonth = async (req, res) => {
    try {
        const { month } = req.query;
        const allBudgets = await Budget.find({ budget_month: month });
        res.send(allBudgets);
        if (!allBudgets) {
            res.send({ message: 'No expenses found for this month' });
        }
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}


exports.getBudgetById = async (req, res) => {
    try {
        const budget = await Budget.findOne({ _id: req.params.id })
        res.send(budget);
        if (!budget) {
            res.send({ message: 'Expense Not found' });
        }
    } catch (e) {
        res.status(500).send('Something went wrong!!!');
    }
}


exports.updateBudget = async (req, res) => {
    try {
        const updatedBudget = await Budget.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
            })
        res.send(updatedBudget);
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}

exports.deleteBudget = async (req, res) => {
    try {
        const deletedBudget = await Budget.deleteOne({ _id: req.params.id });
        res.send(deletedBudget);
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}