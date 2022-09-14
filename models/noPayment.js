const mongoose = require('mongoose');

const NoPaymentSchema = new mongoose.Schema({
	paymentStatus: {type: mongoose.Schema.ObjectId, ref: 'Payment'},
	noPaymentStatus: Boolean,
	paymentCause:
	{	
		type:     String,
		unique:   true,
		required: true,
	},	

});
module.exports = mongoose.model('NoPayment', NoPaymentSchema);