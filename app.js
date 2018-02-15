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
var async = require('asyncawait/async');
var await = require('asyncawait/await');
const winston = require('winston');
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const logDir = 'log';
//mongoose.connect('mongodb://localhost/todolist');
var db = mongoose.connection;

const tsFormat = () => (new Date()).toLocaleTimeString();
date = new Date();

logger = new (winston.Logger)({
	transports: [
		// colorize the output to the console
		new (winston.transports.Console)({
			timestamp: tsFormat,
			colorize: true,
			level: 'info'
		}),
		new (winston.transports.File)({
			filename: `${logDir}/${date.toDateString()}.log`,
			timestamp: tsFormat,
			level: env === 'development' ? 'debug' : 'info'
		})
	]
});

logger.info("Starting application");

// DB SETUP
MONGOLAB_URI = process.env.MONGOLAB_URI_MATHWEB;

logger.info("Initializing connection to MongoDB");
mongoose.connect(MONGOLAB_URI, { useMongoClient: true }, function (error) {
	if (error) console.error(error);
	else logger.info("Successfuly connected to MongoDB");
});

Problem = require('./models/problem.js');

// display all problems
app.get('/api/problem', function(req, res){
		Problem.getAllProblems(function(err, allProblems){
			if(err){
				throw err;
			}
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
app.post('/api/problem', function(req, res){
	var problem = req.body;

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
var server = app.listen(process.env.PORT || 98, function () {
	var host = server.address().address;
	var port = server.address().port;
	logger.info("App listening at http://%s:%s", host, port);
})
// --------------------------------------------------------------------------------------------
