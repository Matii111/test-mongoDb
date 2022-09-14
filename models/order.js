const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
	orderStatus:    
	{
		type:     String,
		unique:   true,
		required: true,
	},
	paymentStatus: {type: mongoose.Schema.ObjectId, ref: 'Payment'},	
	paymentName:   {type: mongoose.Schema.ObjectId, ref: 'PaymentMethods'},
	article:       [{type: mongoose.Schema.ObjectId, ref: 'Article'}],
	user:       [{type: mongoose.Schema.ObjectId, ref: 'User'}],
});

module.exports = mongoose.model('Order', OrderSchema);
