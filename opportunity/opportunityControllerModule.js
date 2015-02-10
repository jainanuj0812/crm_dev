var opportunityControllerModule=angular.module('crmApp.opportunityControllerModule',['crmApp.opportunityServiceModule']);
opportunityControllerModule.controller('opportunityListController',function($scope,opportunityService)
		{
         init();
         function init()
         {
        	 $scope.opportunities=opportunityService.getOpportunities();
        	 $scope.hide=false;
         };
	
		}
		
);

opportunityControllerModule.controller('viewOpportunityController', function($scope,$routeParams,opportunityService){
    var opportunityId;
    $scope.opportunity={};
    init();
    function init(){
         opportunityId=($routeParams.opportunityId);    
         $scope.opportunity=opportunityService.getopportunity(opportunityId);   
        
  }
     
    
});