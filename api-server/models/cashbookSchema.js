const mongoose = require('mongoose');


const cashbookSchema = new mongoose.Schema({

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    expenseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Expense' },
    incomeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Income' },
    currentBalance: { type: Number, min: 0,default:0 }
}, {
    timestamps: true
});

const Cashbook = new mongoose.model('Cashbook', cashbookSchema);

module.exports = { Cashbook };