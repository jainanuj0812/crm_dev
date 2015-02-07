var leadControllerModule=angular.module('leadControllerModule',['leadServiceModule','crmLead']);
leadControllerModule.controller('leadListController',function($scope,leadService)
		{
         init();
         function init()
         {
        	 $scope.leads=leadService.getLeads();
        	 $scope.hide=false;
         }
	
		}
		
);

leadControllerModule.controller('viewLeadController', function($scope,$routeParams,leadService){
    var leadId;
    $scope.lead={};
    init();
    function init(){
         leadId=($routeParams.leadId);    
         $scope.lead=leadService.getlead(leadId);   
        
  }
     
    
});