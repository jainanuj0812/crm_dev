var opportunityControllerModule=angular.module('crmApp.opportunityControllerModule',['crmApp.opportunityServiceModule']);
opportunityControllerModule.controller('opportunityListController',function($scope,opportunityService)
		{
         init();
         function init()
         {
        	 $scope.opportunities=opportunityService.getopportunities();
        	 $scope.hide=false;
         };
    }
		
);
