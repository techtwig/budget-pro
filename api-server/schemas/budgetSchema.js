const mongoose = require('mongoose');
const moment = require('moment');
const month = moment().format('MMMM'); 

const budgetSchema = new mongoose.Schema({
    budget_item: {type: String, required:true},
    budget_amount: {type: Number, required: true},
    budget_month: {type: String, default: month},
    budget_time: {type: Date, default: Date.now()},
});

const Budget = new mongoose.model('Budget', budgetSchema);

module.exports = {Budget};