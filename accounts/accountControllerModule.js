var accountControllerModule = angular.module('crmApp.accountControllerModule',
		[ 'crmApp.accountServiceModule' ]);
accountControllerModule.controller('accountListController', function($scope,
		accountService) {
	init();
	function init() {
		$scope.accounts = accountService.getAccounts();
		$scope.hide = false;
	}

}

);

accountControllerModule.controller('viewAccountController', function($scope,
		$routeParams, accountService) {
	var accountId;
	$scope.account = {};
	init();
	function init() {
		accountId = ($routeParams.accountId);
		$scope.account = accountService.getAccount(accountId);

	}

});