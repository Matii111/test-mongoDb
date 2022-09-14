const mongoose = require('mongoose');

const paymentMethodsSchema = new mongoose.Schema({	
	paymentName: 
	{
		type:     String,	
		unique:   true,
		required: true,
	}
});
module.exports = mongoose.model('PaymentMethods', paymentMethodsSchema);
