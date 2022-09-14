const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	run:        
	{
		type:     String,
		unique:   true,
		required: true,
	},
	email:        
	{
		type:     String,
		unique:   true,
		required: true,
	},
	name:         String,
	lastName:     String,
	pass:         String,
	adress:       String,
	commune :     String,
	province:     String,
	region:       String,
	birthday:     String,
	gender:       String,
	phone:        String,	
	registered:   Boolean
});

module.exports = mongoose.model('User', UserSchema);
