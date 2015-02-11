var accountServiceModule = angular.module('crmApp.accountServiceModule',
		[ 'crmApp.accountControllerModule' ]);
accountServiceModule.service('accountService', function() {

	this.getAccounts = function() {
		return accounts;
	};

	this.getAccount = function(id) {
		for (var i = 0; i < accounts.length - 1; i++) {
			if (id == accounts[i].id) {
				return accounts[i];
			}

		}
		return null;

	};

	var accounts = [ {
		id : 1,
		accountName : 'Hotwax Systems',
		responsiblePerson : 'Pranay Pandey',
		email : 'pranay.pandey@gmail.com',
		phoneNo : 9584593069,
		companyType : 'Private',
		industry : 'IT',
		annualIncome : 4000,
		currency : 'INR',
		comment : 'Comment just for testing purpose amit',
		img : 'assets/images/hotwax-systems-logo.png'
	}, {
		id : 2,
		accountName : 'Rahul Bhammarker',
		responsiblePerson : 'Bhammarker',
		email : 'rahul@gmail.com',
		phoneNo : 9926587421,
		companyType : 'Private',
		industry : 'Engineer',
		annualIncome : 14000,
		currency : 'USD',
		comment : 'Comment just for testing purpose by rahul',
		img : 'assets/images/rb.jpg'
	}, {
		id : 3,
		accountName : 'Aman Agarawal',
		responsiblePerson : 'agrawal',
		email : 'aman@gmail.com',
		phoneNo : 8745521145,
		companyType : 'Goverment',
		industry : 'Engineer',
		annualIncome : 3000,
		currency : 'USD',
		comment : 'Comment just for testing purpose by aman',
		img : 'assets/images/aman.jpg'
	}, {
		id : 4,
		accountName : 'Anuj Jain',
		responsiblePerson : 'amuj',
		email : 'anuj@gmail.com',
		phoneNo : 96584571423,
		companyType : 'NGO',
		industry : 'IT',
		annualIncome : 300,
		currency : 'USD',
		comment : 'Comment just for testing purpose by anuj',
		img : 'assets/images/anuj.jpg'
	} ];
});