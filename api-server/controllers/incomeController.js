const { Income } = require('./../models/incomeSchema');
const { Budget } = require("./../models/budgetSchema");
const { Expense } = require("./../models/expenseSchema");
const { Cashbook } = require('./../models/cashbookSchema');
const { Category } = require('./../models/categorySchema');


exports.createIncome = async (req, res) => {
    try {
        req.body.userId = req.userId

        const categoryName = req.body.category

        const category = await Category.create({
            name: categoryName,
            type: "income"
        })
        req.body.categoryId = category._id
        const income = req.body;
        const incomeDocument = new Income(income);
        await incomeDocument.save();

        const lastCashbook = await Cashbook.findOne({ userId: req.userId }, {}, { sort: { _id: -1 } })


        let currentBalance = 0
        if (lastCashbook) currentBalance = lastCashbook.currentBalance + req.body.income_amount
        else currentBalance = req.body.income_amount

        await Cashbook.create({
            userId: req.userId,
            incomeId: incomeDocument._id,
            currentBalance
        })

        res.json({ "message": "Income added successfully" });
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}


exports.getAllIncomes = async (req, res) => {
    try {
        const allIncomes = await Income.find({});
        res.send(allIncomes);
        if (!allIncomes) {
            res.send({ message: 'No expenses found' });
        }
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}


exports.getAllIncomeByMonth = async (req, res) => {
    try {
        const { month } = req.query;
        const allIncomes = await Income.find({ income_month: month, userId: req.userId });
        // console.log(allIncomes)
        if (!allIncomes) {
            return res.send({ message: 'No expenses found for this month' });
        }
        res.send(allIncomes);
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}


exports.getIncomeById = async (req, res) => {
    try {
        const income = await Income.findOne({ _id: req.params.id })
        if (!income) {
            return res.send({ message: 'Expense Not found' });
        }
        res.send(income);
    } catch (e) {
        res.status(500).send('Something went wrong!!!');
    }
}

exports.updateIncome = async (req, res) => {
    try {
        const updatedIncome = await Income.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
            })
        res.send(updatedIncome);
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}

exports.deleteIncome = async (req, res) => {
    try {

        const income = await Income.findById(req.params.id)
        const lastCashbook = await Cashbook.findOne({ userId: req.userId }, {}, { sort: { _id: -1 } })

        if (!lastCashbook.incomeId.equals(income._id)) {
            console.log('You cant delete this income')
            return res.status(401).send('You cant delete this income');
        }

        await Cashbook.findOneAndDelete({ incomeId: income._id })

        const deletedIncome = await Income.deleteOne({ _id: req.params.id });
        res.send(deletedIncome);
    } catch (e) {
        console.log(e)
        res.status(500).send('Something went wrong!!');
    }
}