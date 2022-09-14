const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
	user:        {type: mongoose.Schema.ObjectId, ref: 'User'},
	accesspass : 
	{
		type:     String,
		unique:   true,
		required: true,
	},
});
module.exports = mongoose.model('Admin', adminSchema);
