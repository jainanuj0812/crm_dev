var leadServiceModule=angular.module('crmApp.leadServiceModule',['crmApp.leadControllerModule']);
leadServiceModule.service('leadService',function(){

this.getLeads=function(){
		return leads;
	};

	this.getLead=function(id){
        for(var i=0;i<leads.length-1;i++)
        {
            if(id==leads[i].id)
                {return leads[i];}
                
        }
        return null;
            
   };
	
var leads=[
{id:1, leadName:'Amit', status:'In progress', sourceName:'...........',email:'gadaley@gmail.com', phoneNo:9584593069,company:'hotwax systems',addressLine1: 'vijaynagar',addressLine2: ''},
{id:2, leadName:'Rahul', responsiblePerson:'Bhammarker', email:'rahul@gmail.com', phoneNo:111111111,companyType:'hotwax media',industry:'engineer',annualIncome: 4000,currency: 'USD',comment: 'Comment just for testing purpose by rahul'},
{id:3, leadName:'Aman', responsiblePerson:'agrawal', email:'aman@gmail.com', phoneNo:999999999,companyType:'hotwax family',industry:'engineer',annualIncome: 4000,currency: 'USD',comment: 'Comment just for testing purpose by aman'},
];
});