const mongoose = require('mongoose');
const moment = require('moment');
const month = moment().format('MMMM'); // February

const expenseSchema = new mongoose.Schema({
    expense_item: {type: String, require: true},
    expense_amount: {type: Number, require: true},
    expense_month: {type: String,  default: month},
    expense_time: {type: Date, default: Date.now()},
});

const Expense = new mongoose.model('Expense', expenseSchema);

module.exports = {Expense};