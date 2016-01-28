var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	app = express(),
	Contact = require("./server-assets/contactModel"),
	secret = require("./secret"),
	uristring = secret.uriString;

	app.use(express.static(__dirname+"/public"));
	app.use(bodyParser.json());



	app.post("/api/contact", function(req, res){ 
		var contact = new Contact(req.body);
		contact.save().then(function(err, result){
			return res.status(201).end();
		});
	})

	//Connections
	app.listen(process.env.PORT, function(){
		console.log("listening");
	});

	mongoose.connect(uristring);
	mongoose.connection.once("open", function(){
		console.log("db connected");
	});