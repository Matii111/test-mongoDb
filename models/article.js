const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({	
	articleName:    String,	
	price:          Number,
	disponiblity:   Boolean
});
module.exports = mongoose.model('Article', articleSchema);
