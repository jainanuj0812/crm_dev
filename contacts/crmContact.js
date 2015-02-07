var crmContact=angular.module('crmContact',['ngRoute','contactServiceModule','contactControllerModule']);

crmContact.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'contactListController',
		templateUrl: 'partials/check.html'	
	 })
	 
	 .when('/createContact',{
		controller: 'contactListController',
		templateUrl: 'partials/createContact.html'	
	 })
	 
	  .when('/createTask',{
		controller: 'contactListController',
		templateUrl: 'partials/newTask.html'	
	 })
	 
	   .when('/viewContact/:contactId',{
		controller: 'viewContactController',
		templateUrl: 'partials/viewContact.html'	
	 })
	 
	    .when('/listContact',{
		controller: 'contactListController',
		templateUrl: 'partials/listContact.html'	
	 })
	
	.otherwise({redirectTo:'/'});
});