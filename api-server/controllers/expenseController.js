const { Cashbook } = require('../models/cashbookSchema');
const { Category } = require('../models/categorySchema');
const { Expense } = require('../models/expenseSchema');

exports.createExpense = async (req, res) => {
    try {

        const lastCashbook = await Cashbook.findOne({ userId: req.userId }, {}, { sort: { _id: -1 } })
        let currentBalance = -1
        if (lastCashbook) currentBalance = lastCashbook.currentBalance - req.body.expenseAmount

        if (currentBalance < 0) {
            return res.status(400).send('Current balance cant be less than 0');
        }

        req.body.userId = req.userId
        const categoryName = req.body.category

        const category = await Category.create({
            name: categoryName,
            type: "expense"
        })
        req.body.categoryId = category._id
        const expense = req.body;
        const expenseDocument = new Expense(expense);

        await expenseDocument.save();

        await Cashbook.create({
            userId: req.userId,
            expenseId: expenseDocument._id,
            currentBalance
        })

        res.json({ "message": "Expense added successfully" });
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}

exports.getAllExpenses = async (req, res) => {
    try {
        const { month } = req.query;
        console.log('month', month)
        const allExpenses = await Expense.find({});
        if (!allExpenses) {
          return  res.send({ message: 'No expenses found' });
        }
        res.send(allExpenses);
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}

exports.getExpensesByMonth = async (req, res) => {
    try {

        const { month } = req.query;
        const allExpenses = await Expense.find({ expenseMonth: month, userId: req.userId });
        if (!allExpenses) {
            return res.send({ message: 'No expenses found for this month' });
        }
        res.send(allExpenses);
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}

exports.getExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findOne({ _id: req.params.id })
        if (!expense) {
            return res.send({ message: 'Expense Not found' });
        }
        res.send(expense);
    } catch (e) {
        res.status(500).send('Something went wrong!!!');
    }
}

exports.updateExpense = async (req, res) => {
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
            })
        res.send(updatedExpense);
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}


exports.deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id)
        // console.log(expense._id)
        const lastCashbook = await Cashbook.findOne({ userId: req.userId }, {}, { sort: { _id: -1 } })
        // console.log('cash',lastCashbook.expenseId)


        if (!lastCashbook.expenseId.equals(expense._id)) {
            console.log('You cant delete this expense')
            return res.status(401).send('You cant delete this expense');
        }

        await Cashbook.findOneAndDelete({ expenseId: expense._id })

        const deletedExpense = await Expense.deleteOne({ _id: req.params.id });
        res.send(deletedExpense);
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}