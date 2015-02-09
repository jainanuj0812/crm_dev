var opportunityServiceModule=angular.module('crmApp.opportunityServiceModule',['crmApp.opportunityControllerModule']);
opportunityServiceModule.service('opportunityService',function(){

this.getOpportunities=function(){
		return Opportunities;
	};

	this.getOpportunity=function(id){
        for(var i=0;i<opportunities.length-1;i++)
        {
            if(id==opportunities[i].id)
                {return opportunities[i];}
                
        }
        return null;
            
   };
	
var opportunities=[
{id:1, leadName:'Amit', responsiblePerson:'Gadaley', email:'agadaley@gmail.com', phoneNo:9584593069,companyType:'hotwax systems',industry:'engineer',annualIncome: 4000,currency: 'INR',comment: 'Comment just for testing purpose amit'},
{id:1, leadName:'Rahul', responsiblePerson:'Bhammarker', email:'rahul@gmail.com', phoneNo:111111111,companyType:'hotwax media',industry:'engineer',annualIncome: 4000,currency: 'USD',comment: 'Comment just for testing purpose by rahul'},
{id:1, leadName:'Aman', responsiblePerson:'agrawal', email:'aman@gmail.com', phoneNo:999999999,companyType:'hotwax family',industry:'engineer',annualIncome: 4000,currency: 'USD',comment: 'Comment just for testing purpose by aman'},
];
});