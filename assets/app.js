var crmApp=angular.module('crmApp',['ngRoute', 'crmApp.accountControllerModule', 'crmApp.leadControllerModule']);

crmApp.config(function($routeProvider){
	$routeProvider
	.when('/dashboard',{
		controller: 'dashboardController',
		templateUrl: 'dashboard/dashboard.html'	
	 })
	 	.when('/contacts',{
		controller: 'contactsController',
		templateUrl: 'crm_dev/contacts/contacst.html'	
	 })
	 	.when('/accounts',{
		controller: 'accountListController',
		templateUrl: 'accounts/partials/listAccount.html'	
	 })
	 	.when('/leads',{
		controller: 'leadListController',
		templateUrl: 'leads/partials/listLead.html'	
	 })
	 	.when('/opportunities',{
		controller: 'opportunitiesController',
		templateUrl: 'opportunity/createOpportunity.html'	
	 })	.when('/events',{
		controller: 'eventsController',
		templateUrl: 'crm/components/events/events.html'	
	 })
	
	.otherwise({redirectTo:'/'});
});
