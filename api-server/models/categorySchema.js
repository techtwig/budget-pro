const mongoose = require('mongoose');
const moment = require('moment');
const month = moment().format('MMMM');

const categorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String,
        enum: ['income', 'expense', 'budget'],
    }
}, {
    timestamps: true
});

const Category = new mongoose.model('Category', categorySchema);

module.exports = { Category };