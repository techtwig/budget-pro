const { Cashbook } = require("../models/cashbookSchema");


exports.getCashbook = async (req, res) => {
    try {
        const cashbooks = await Cashbook.find({ userId: req.userId }).populate({ path: 'incomeId', model: 'Income' })
            .populate({ path: 'expenseId', model: 'Expense' });;

        res.send(cashbooks);
    } catch (e) {
        res.status(500).send('Something went wrong!!');
    }
}