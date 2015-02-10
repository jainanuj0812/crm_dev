var dashboardControllerModule=angular.module('crmApp.dashboardControllerModule');
dashboardControllerModule.controller('dashboardController',['$scope',function($scope){
	 $scope.todos = [
	                 {text:'Prepare Report', done:true},
	                 {text:'Meeting @ Sayaji', done:true},
	                 {text:'Do Homework', done:false}];
	            
	               $scope.remaining = function() {
	                 var count = 0;
	                 angular.forEach($scope.todos, function(todo) {
	                   count += todo.done ? 0 : 1;
	                 });
	                 return count;
	               };
	            }]);





