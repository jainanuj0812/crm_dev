var crmLead=angular.module('crmLead',['ngRoute','leadServiceModule','leadControllerModule']);

crmlead.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'leadListController',
		templateUrl: 'partials/listlead.html'	
	 })
	 
	 .when('/createlead',{
		controller: 'leadListController',
		templateUrl: 'partials/createlead.html'	
	 })
	 
	   .when('/viewlead/:leadId',{
		controller: 'viewleadController',
		templateUrl: 'partials/viewlead.html'	
	 })
	 
	    .when('/listlead',{
		controller: 'leadListController',
		templateUrl: 'partials/listlead.html'	
	 })
	
	.otherwise({redirectTo:'/'});
});