var crmLead=angular.module('crmLead',['ngRoute','leadServiceModule','leadControllerModule']);

crmLead.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'leadListController',
		templateUrl: 'partials/listLead.html'	
	 })
	 
	 .when('/createLead',{
		controller: 'leadListController',
		templateUrl: 'partials/createLead.html'	
	 })
	 
	   .when('/viewLead/:leadId',{
		controller: 'viewleadController',
		templateUrl: 'partials/viewLead.html'	
	 })
	 
	    .when('/listLead',{
		controller: 'leadListController',
		templateUrl: 'partials/listLead.html'	
	 })
	
	.otherwise({redirectTo:'/'});
});