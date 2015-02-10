var crmApp=angular.module('crmApp',['ngRoute', 'crmApp.dashboardControllerModule', 'crmApp.accountControllerModule', 'crmApp.leadControllerModule', 'crmApp.contactControllerModule', 'crmApp.opportunityControllerModule','ui.calendar']);

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
	 	.when('/viewAccount/:accountId',{
		controller: 'viewAccountController',
		templateUrl: 'accounts/partials/viewAccount.html'	
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
	 	.when('/viewLead/:leadId',{
		controller: 'viewLeadController',
		templateUrl: 'leads/partials/viewLead.html'	
	})	 
	 	.when('/opportunities',{
		controller: 'opportunityListController',
		templateUrl: 'opportunity/partials/listOpportunity.html'	
	 })	
	 	.when('/addOpportunity',{
		templateUrl: 'opportunity/partials/createOpportunity.html'
	 })	
	 	.when('/viewOpportunity/:opportunityId',{
		controller: 'viewOpportunityController',
		templateUrl: 'opportunity/partials/viewOpportunity.html'	
	 })	 
	 	.when('/events',{
		controller: 'eventsController',
		templateUrl: 'events/createEvent.html'	
	 })	
	.otherwise({redirectTo:'/dashboard'});
});
