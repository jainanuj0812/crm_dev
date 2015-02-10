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
{id:1, accountName:'Amit Gadaley', responsiblePerson:'Gadaley', email:'agadaley@gmail.com', phoneNo:9584593069,companyType:'hotwax systems',industry:'Engineer',annualIncome: 4000,currency: 'INR',comment: 'Comment just for testing purpose amit'},
{id:2, accountName:'Rahul Bhammarker', responsiblePerson:'Bhammarker', email:'rahul@gmail.com', phoneNo:9926587421,companyType:'hotwax media',industry:'Engineer',annualIncome: 14000,currency: 'USD',comment: 'Comment just for testing purpose by rahul'},
{id:3, accountName:'Aman Agarawal', responsiblePerson:'agrawal', email:'aman@gmail.com', phoneNo:8745521145,companyType:'hotwax family',industry:'Engineer',annualIncome: 3000,currency: 'USD',comment: 'Comment just for testing purpose by aman'},
{id:4, accountName:'Anuj Jain',	 responsiblePerson:'amuj', email:'anuj@gmail.com', phoneNo:96584571423, companyType:'Hotwax Systems', industry:'Engineer', annualIncome: 300, currency: 'USD', comment: 'Comment just for testing purpose by anuj'}
];
});