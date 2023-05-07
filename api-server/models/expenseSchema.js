const mongoose = require('mongoose');
const moment = require('moment');
const month = moment().format('MMMM'); // February

const expenseSchema = new mongoose.Schema({
    expenseItem: {type: String, require: true},
    expenseAmount: {type: Number, require: true},
    expenseMonth: {type: String,  default: month},
    expenseTime: {type: Date, default: Date.now()},
    userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    categoryId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
});

const Expense = new mongoose.model('Expense', expenseSchema);

module.exports = {Expense};