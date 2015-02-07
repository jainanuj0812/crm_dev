var accountServiceModule=angular.module('crmApp.accountServiceModule',['crmApp.accountControllerModule']);
accountServiceModule.service('accountService',function(){

this.getAccounts=function(){
		return accounts;
	};

	this.getAccount=function(id){
        for(var i=0;i<accounts.length-1;i++)
        {
            if(id==accounts[i].id)
                {return accounts[i];}
                
        }
        return null;
            
   };
	
var accounts=[
{id:1, accountName:'Amit', responsiblePerson:'Gadaley', email:'agadaley@gmail.com', phoneNo:9584593069,companyType:'hotwax systems',industry:'engineer',annualIncome: 4000,currency: 'INR',comment: 'Comment just for testing purpose amit'},
{id:1, accountName:'Rahul', responsiblePerson:'Bhammarker', email:'rahul@gmail.com', phoneNo:111111111,companyType:'hotwax media',industry:'engineer',annualIncome: 4000,currency: 'USD',comment: 'Comment just for testing purpose by rahul'},
{id:1, accountName:'Aman', responsiblePerson:'agrawal', email:'aman@gmail.com', phoneNo:999999999,companyType:'hotwax family',industry:'engineer',annualIncome: 4000,currency: 'USD',comment: 'Comment just for testing purpose by aman'},
];
});