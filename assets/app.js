var crmApp=angular.module('crmApp',['ngRoute']);

crmApp.config(function($routeProvider){
	$routeProvider
	.when('/dashboard',{
		controller: 'dashboardController',
		templateUrl: 'crm_dev/dashboard/dashboard.html'	
	 })
	 	.when('/contacts',{
		controller: 'contactsController',
		templateUrl: 'crm/components/contacts/contacstList.html'	
	 })
	 	.when('/accounts',{
		controller: 'accountsController',
		templateUrl: 'crm/components/accounts/accountsList.html'	
	 })
	 	.when('/leads',{
		controller: 'leadsController',
		templateUrl: 'crm/components/leads/leadsList.html'	
	 })
	 	.when('/opportunities',{
		controller: 'opportunitiesController',
		templateUrl: 'crm/components/opportunities/opportunitiesList.html'	
	 })	.when('/events',{
		controller: 'eventsController',
		templateUrl: 'crm/components/events/events.html'	
	 })
	
	.otherwise({redirectTo:'/dashboard'});
});
