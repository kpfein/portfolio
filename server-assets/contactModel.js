var mongoose = require("mongoose");

var Contact = new mongoose.Schema({
	firstName: {type: String},
	lastName: {type: String},
	email: {type: String},
	message: {type: String},

}, {timestamps: true});


module.exports = mongoose.model("Contact", Contact);