const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {type: String, required: true},
	userName: {type: String, required: true},
	email: {
		type: String,
		trim: true,
		lowercase: true,
		unique: true,
		required: true,
		//validate: [validateEmail, 'Please fill a valid email address'],
		match: [/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Please fill a valid email address']
	},
	password: {type: String, required: true},
	current_balance:{
		type:Number,
		min:0
	}
});

const User = new mongoose.model('User', userSchema);
module.exports = {User};