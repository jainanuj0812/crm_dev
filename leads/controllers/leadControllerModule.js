var leadControllerModule=angular.module('leadControllerModule',['leadServiceModule','crmlead']);
leadControllerModule.controller('leadListController',function($scope,leadService)
		{
         init();
         function init()
         {
        	 $scope.leads=leadService.getleads();
        	 $scope.hide=false;
         }
	
		}
		
);

leadControllerModule.controller('viewleadController', function($scope,$routeParams,leadService){
    var leadId;
    $scope.lead={};
    init();
    function init(){
         leadId=($routeParams.leadId);    
         $scope.lead=leadService.getlead(leadId);   
        
  }
     
    
});