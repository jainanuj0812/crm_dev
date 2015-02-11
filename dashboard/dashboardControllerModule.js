var dashboardControllerModule = angular.module('crmApp.dashboardControllerModule',['crmApp.dashboardServiceModule']);

dashboardControllerModule.controller('dashboardController', function($scope,dashboardService) {

	init();
	function init() {
		$scope.users = dashboardService.getUsers();
	};
	$scope.todos = [ {
		text : 'Prepare Report',
		done : false,
		timing : '4 PM Today'
	}, {
		text : 'Meeting @ Sayaji',
		done : false,
		timing : '5 PM 3/3/15'
	}, {
		text : 'Do Homework',
		done : true,
		timing : '1 PM 18/2/15'
	} ];

	$scope.addTodo = function() {
		$scope.todos.push({
			text : $scope.todoText,
			done : false
		});
		$scope.todoText = '';
	};

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	};
});
