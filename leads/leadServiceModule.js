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
{id:1, leadName:'Amit', status:'In progress', sourceName:'...........',email:'gadaley@gmail.com', phoneNo:9584593069,company:'hotwax systems',addressLine1: 'vijaynagar',addressLine2: 'behind sayaji',country:'India',state:'m.p'},
{id:2, leadName:'Rahul', status:'Assigned to', sourceName:'...........',email:'bhammarker@gmail.com', phoneNo:1111111111,company:'hotwax media',addressLine1: 'LIG',addressLine2: 'behind C21',country:'India',state:'u.p'},
{id:3, leadName:'Saket', status:'Dead', sourceName:'...........',email:'saket@gmail.com', phoneNo:9425094250,company:'hotwax family',addressLine1: 'sneh nagar',addressLine2: 'behind Lotus',country:'India',state:'delhi'},
];
});