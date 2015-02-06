var app=angular.module('crmContact',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'contactListController',
		templateUrl: 'crm/components/contacts/partials/check.html'	
	 })
	 
	 .when('/createContact',{
		controller: 'contactListController',
		templateUrl: 'crm/components/contacts/partials/createContact.html'	
	 })
	 
	  .when('/createTask',{
		controller: 'contactListController',
		templateUrl: 'crm/components/contacts/partials/newTask.html'	
	 })
	 
	   .when('/viewContact/:contactId',{
		controller: 'viewContactController',
		templateUrl: 'crm/components/contacts/partials/viewContact.html'	
	 })
	 
	    .when('/listContact',{
		controller: 'contactListController',
		templateUrl: 'crm/components/contacts/partials/listContact.html'	
	 })
	
	.otherwise({redirectTo:'/'});
});