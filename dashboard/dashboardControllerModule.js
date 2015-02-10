var dashboardControllerModule=angular.module('crmApp.dashboardControllerModule', []);
dashboardControllerModule.controller('dashboardController',function($scope){
	 $scope.todos = [
	                 {text:'Prepare Report', done:false},
	                 {text:'Meeting @ Sayaji', done:false},
	                 {text:'Do Homework', done:true}];
	            
	               $scope.addTodo = function() {
	                 $scope.todos.push({text:$scope.todoText, done:false});
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





