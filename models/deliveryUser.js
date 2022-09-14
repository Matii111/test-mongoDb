const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
	user: {type: mongoose.Schema.ObjectId, ref: 'User'},	
	accesspassDelivery: 
	{
		type:     String,
		unique:   true,
		required: true,
	},
});
module.exports = mongoose.model('Delivery', deliverySchema);
