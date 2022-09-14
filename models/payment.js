const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
	user:       {type: mongoose.Schema.ObjectId, ref: 'User'},
	admin:      {type: mongoose.Schema.ObjectId, ref: 'Admin'},
	order:      [{type: mongoose.Schema.ObjectId, ref: 'Order'}],
	paymentMethod:      {type: mongoose.Schema.ObjectId, ref: 'PaymentMethods'},
	paymentStatus :
	{
		type:     Boolean,
		unique:   true,
		required: true,
	},
});

module.exports = mongoose.model('Payment', PaymentSchema);
