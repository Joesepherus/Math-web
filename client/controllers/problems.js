var myApp = angular.module('myApp');

myApp.controller('problemController',
	['$scope', '$http', '$location', '$routeParams',
		function ($scope, $http, $location, $routeParams) {
			$scope.getAllProblems = function () {
				$http.get('/api/problem').then(function (response) {
					$scope.allProblems = response.data;
				});
			}

			$scope.getProblem = function () {
				var id = $routeParams.id;
				$http.get('api/problem' + id).then(function (response) {
					$scope.problem = response.data;
				});
			}

			$scope.addProblem = function () {
				$http.post('api/problem', $scope.problem).then(function (response) {
					//window.location.href = '#!/';
					window.location.reload();
				});
			}

			$scope.editProblem = function (problem) {
				$http.put('api/problem/' + problem._id, $scope.problem).then(function (response) {
					window.location.reload();
				});
			}

			$scope.deletePermanentlyProblem = function (id, problem) {
				$http.delete('api/problem/deleted/' + id).then(function (response) {
					window.location.reload();
				});
			}
			// Mathquill
			var MQ = MathQuill.getInterface(2);
			var problemSpan = document.getElementById('problem');
			MQ.StaticMath(problemSpan);

			var answerSpan = document.getElementById('answer');
			var answerMathField = MQ.MathField(answerSpan, {
				handlers: {
					edit: function () {
						var enteredMath = answerMathField.latex(); // Get entered math in LaTeX format
						checkAnswer(enteredMath);
					}
				}
			});

		}
	]);
