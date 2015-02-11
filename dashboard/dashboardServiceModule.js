var dashboardServiceModule = angular.module('crmApp.dashboardServiceModule',['crmApp.dashboardControllerModule']);
dashboardServiceModule.service('dashboardService', function() {

	this.getUsers = function() {
		return users;
	};

	this.getUser = function(id) {
		for (var i = 0; i < users.length - 1; i++) {
			if (id == users[i].id) {
				return users[i];
			}

		}
		return null;

	};

	var users = [ {
		id : 1,
		firstName : 'Amit',
		lastName : 'Gadaley',
		email : 'agadaley@gmail.com',
		phoneNo : 9584593069,
		addressLine1 : 'HB-32',
		addressLine2 : 'Palasia Sqare 450234',
		state : 'Madhya pradesh',
		country : 'India',
		company : 'HotWax Systems',
		position : 'Enterprise software  engineer',
		dob : '17-04-1993'
	}, {
		id : 2,
		firstName : 'Aman',
		lastName : 'Agrawal',
		email : 'aman@gmail.com',
		phoneNo : 4512789632,
		address : 'LIG-52',
		addressLine2 : 'Ananand Nagar 542263',
		state : 'Madhya pradesh',
		country : 'India',
		company : 'HotWax Systems',
		position : 'Enterprise software  engineer',
		dob : '23-02-1993'
	} ];
});