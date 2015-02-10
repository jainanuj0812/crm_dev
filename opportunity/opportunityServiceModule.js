var opportunityServiceModule=angular.module('crmApp.opportunityServiceModule',['crmApp.opportunityControllerModule']);
opportunityServiceModule.service('opportunityService',function(){

this.getOpportunities=function(){
		return contacts;
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
{id:1, leadName:'Amit', assignedTo:'Gadaley', nextStep:'..........', leadSource:'2',team:'hotwax systems',likely:4000,description: 'Comment just for testing purpose amit'},
{id:2, leadName:'Saket', assignedTo:'Baghel', nextStep:'..........', leadSource:'2',team:'hotwax systems',likely:4000,description: 'Comment just for testing purpose amit'},
{id:3, leadName:'Rahul', assignedTo:'Bhammarker', nextStep:'..........', leadSource:'2',team:'hotwax systems',likely:4000,description: 'Comment just for testing purpose amit'} 
];
});