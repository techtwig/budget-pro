const mongoose = require('mongoose');
const moment = require('moment');
const month = moment().format('MMMM'); // February

const expenseSchema = new mongoose.Schema({
    expenseItem: {type: String, require: true},
    expenseAmount: {type: Number, require: true},
    expenseMonth: {type: String,  default: month},
    expenseTime: {type: Date, default: Date.now()},
});

const Expense = new mongoose.model('Expense', expenseSchema);

module.exports = {Expense};