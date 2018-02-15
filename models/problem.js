var mongoose = require('mongoose');

var schema = mongoose.Schema({
	id:{
		type: String,
	},
	description:{
		type: String,
		required: true
	},
	steps:{
		type: Array,
		required: true
	},
	rating:{
		type: String,
	},
	state:{
		type: String,
	},
	created_by:{
		type: String,
	},
	create_date:{
		type: Date,
		default: Date.now
	},
	completed_date:{
		type: Date,
	},
	removed_date:{
		type: Date,
	}
});

var Problem = module.exports = mongoose.model('Problem', schema);

module.exports.getAllProblems = function(callback, limit){
	Problem.find(callback).limit(limit);
}

module.exports.getProblemById = function(problemId, callback){
	Problem.findById(problemId, callback);
}

module.exports.addProblem = function(problem, callback){	
	var json = {
		description: problem.description,
        steps: problem.steps,
        rating: problem.rating,
		state: "inprogress",
	}
	Problem.create(json, callback);
}

module.exports.updateProblem = function(id, problem, options, callback){
	var query = {_id: id};
	var update = {
		description: problem.description,
        steps: problem.steps,
		rating: problem.rating,
		state: problem.state
	}
	Problem.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeProblem = function(id, problem, options, callback){
	var query = {_id: id};
	var update = {
		state: "removed",		
	}
	Problem.findOneAndUpdate(query, update, options, callback);
}

module.exports.deletePermanentlyProblem = function(id, callback){
	var query = {_id: id};
	Problem.deleteOne(query, callback);
}

