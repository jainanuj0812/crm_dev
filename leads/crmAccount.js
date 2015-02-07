var crmAccount=angular.module('crmAccount',['ngRoute','accountServiceModule','accountControllerModule']);

crmAccount.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'accountListController',
		templateUrl: 'partials/listAccount.html'	
	 })
	 
	 .when('/createAccount',{
		controller: 'accountListController',
		templateUrl: 'partials/createAccount.html'	
	 })
	 
	   .when('/viewAccount/:accountId',{
		controller: 'viewAccountController',
		templateUrl: 'partials/viewAccount.html'	
	 })
	 
	    .when('/listAccount',{
		controller: 'accountListController',
		templateUrl: 'partials/listAccount.html'	
	 })
	
	.otherwise({redirectTo:'/'});
});