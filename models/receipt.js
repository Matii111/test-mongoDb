const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
	user:        {type: mongoose.Schema.ObjectId, ref: 'User'},
	admin:        {type: mongoose.Schema.ObjectId, ref: 'Admin'},
	Order:        {type: mongoose.Schema.ObjectId, ref: 'Order'},	
});
module.exports = mongoose.model('Receipt', receiptSchema);
