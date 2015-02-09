var crmApp=angular.module('crmApp',['ngRoute', 'crmApp.accountControllerModule', 'crmApp.leadControllerModule', 'crmApp.contactControllerModule']);

crmApp.config(function($routeProvider){
	$routeProvider
	.when('/dashboard',{
		controller: 'dashboardController',
		templateUrl: 'dashboard/dashboard.html'	
	 })
	 	.when('/contacts',{
		controller: 'contactListController',
		templateUrl: 'contacts/partials/listContact.html'	
	 })
	 	.when('/contacts/:param',{
		templateUrl: 'contacts/partials/newViewContact.html'	
	 })
	 	.when('/addContact',{
		templateUrl: 'contacts/partials/createContact.html'
	 })
	 	.when('/viewContact/:contactId',{
		controller: 'viewContactController',
		templateUrl: 'contacts/partials/newViewContact.html'	
	 })	 
	 	.when('/accounts',{
		controller: 'accountListController',
		templateUrl: 'accounts/partials/listAccount.html'	
	 })
	 	.when('/addAccount',{
		templateUrl: 'accounts/partials/createAccount.html'
	 })
	 	.when('/leads',{
		controller: 'leadListController',
		templateUrl: 'leads/partials/listLead.html'	
	 })
	 	.when('/addLead',{
		templateUrl: 'leads/partials/createLead.html'
	 })
	 	.when('/opportunities',{
		controller: 'opportunitiesController',
		templateUrl: 'opportunity/createOpportunity.html'	
	 })	
	 	.when('/addOpportunity',{
		templateUrl: 'opportunity/partials/createOpportunity.html'	
	 })	
	 	.when('/events',{
		controller: 'eventsController',
		templateUrl: 'crm/components/events/events.html'	
	 })	
	.otherwise({redirectTo:'/dashboard'});
});
