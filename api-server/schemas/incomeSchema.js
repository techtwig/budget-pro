const mongoose = require('mongoose');
const moment = require('moment');
const month = moment().format('MMMM'); //26 February
//console.log('month', month)

const incomeSchema = new mongoose.Schema({
    income_source: {type:String, required:true},
    income_amount: {type: Number, required: true},
    income_month: {type: String,  default: month},
    income_time: {type: Date, default: Date.now()},

});


const Income = new mongoose.model('Income', incomeSchema);

module.exports = {Income};