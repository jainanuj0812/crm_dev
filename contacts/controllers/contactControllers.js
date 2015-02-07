var contactControllerModule=angular.module('contactControllerModule',['contactServiceModule','crmContact']);
contactControllerModule.controller('contactListController',function($scope,contactService)
		{
         init();
         function init()
         {
        	 $scope.contacts=contactService.getContacts();
        	 $scope.hide=false;
         }
	
		}
		
);

contactControllerModule.controller('viewContactController', function($scope,$routeParams,contactService){
    var contactId;
    $scope.contact={};
    init();
    function init(){
         contactId=($routeParams.contactId);    
         $scope.contact=contactService.getContact(contactId);   
        
  }
     
    
});