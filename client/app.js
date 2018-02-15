var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when("/problems", {
		controller: "problemController",
		templateUrl: "views/problems.html",
	})
	.when("/", {
		controller: "problemController",
		templateUrl: "views/problems.html",
	})
	.when("/about", {
		controller: "aboutController",
		templateUrl: "views/about.html",
	})
});

