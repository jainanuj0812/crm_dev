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
{id:1, leadName:'Amit Gadaley', status:'In progress', sourceName:'Cold call',email:'gadaley@gmail.com', phoneNo:9584593069,company:'hotwax systems',addressLine1: 'Scheme no 54',addressLine2: 'behind Sayaji Vijaya Nagar',country:'India',state:'M.P',description:'Testing purpose from amit'},
{id:2, leadName:'Rahul bhammarker', status:'Assigned to', sourceName:'Conference',email:'bhammarker@gmail.com', phoneNo:9875232145,company:'Hotwax media',addressLine1: 'LIG-65',addressLine2: 'behind C21 Anand Nagar',country:'India',state:'u.p',description:'Testing purpose from rahul'},
{id:3, leadName:'Saket Baghel', status:'Dead', sourceName:'Meeting',email:'saket@gmail.com', phoneNo:9425094250,company:'Hotwax Systems',addressLine1: 'Sneha Nagar',addressLine2: 'Behind Lotus Temple',country:'India',state:'New Delhi',description:'Test purpose from saket'},
];
});