const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
	user:        {type: mongoose.Schema.ObjectId, ref: 'User'},
	admin:        {type: mongoose.Schema.ObjectId, ref: 'Admin'},
});
module.exports = mongoose.model('Register', registerSchema);
