var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request = require('request');
var cheerio = require('cheerio');
var schedule = require('node-schedule');
var MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
//mongoose.connect('mongodb://localhost/todolist');
var db = mongoose.connection;

const tsFormat = () => (new Date()).toLocaleTimeString();
date = new Date();

var urlencodedParser = bodyParser.urlencoded({extended:false});

console.log("Starting application");

// DB SETUP
MONGOLAB_URI = process.env.MONGOLAB_URI_MATHWEB;

console.log("Initializing connection to MongoDB");
mongoose.connect(MONGOLAB_URI, function (error) {
	if (error) console.error(error);
	else console.log("Successfuly connected to MongoDB");
});

Problem = require('./models/problem.js');

// display all problems
app.get('/api/problem', function(req, res){
		Problem.getAllProblems(function(err, allProblems){
			if(err){
				throw err;
      }
      console.log(allProblems);
			res.json(allProblems);
		});
})

// display a problem with a certain ID
app.get('/api/problem/:id', function(req, res){
	Problems.getProblemById(req.params.id, 
		function(err, problem){
		if(err){
			throw err;
		}
		res.json(problem);
	});
})

// add a new problem
app.post('/api/problem', urlencodedParser, function(req, res){
  var problem = req.body;
  console.log(req.body);

	Problem.addProblem(problem, function(err, problem){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(problem);
		}
	});
})

// update a problem
app.put('/api/problem/:id', function(req, res){
	var id = req.params.id;
	var problem = req.body;

	Problem.updateProblem(id, problem, {}, 
		function(err, problem){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(problem);
		}
	});
})


// change problems state to removed problem
app.put('/api/problem/removed/:id', function(req, res){
	var id = req.params.id;
	var problem = req.body;

	Problem.removeProblem(id, problem, {}, 
		function(err, problem){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(problem);
		}
	});
})

// remove problem permanently
app.delete('/api/problem/deleted/:id', function(req, res){
	var id = req.params.id;
	Problem.deletePermanentlyProblem(id, 
		function(err, problem){
		if(err){
			throw(err);
			res.send({
                message :'something went wrong'
            });
        } 
        else {
		 	res.json(problem);
		}
	});
})

// calling server to listen on port
var server = app.listen(process.env.PORT || 3001, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("App listening at http://%s:%s", host, port);
})
// --------------------------------------------------------------------------------------------