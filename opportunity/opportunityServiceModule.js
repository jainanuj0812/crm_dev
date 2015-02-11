var opportunityServiceModule = angular.module('crmApp.opportunityServiceModule',['crmApp.opportunityControllerModule']);
opportunityServiceModule.service('opportunityService', function() {

  this.getOpportunities = function() {
    return opportunities;
  };

  this.getOpportunity = function(id) {
    for (var i = 0; i < opportunities.length - 1; i++) {
      if (id == opportunities[i].id) {
        return opportunities[i];
      }

    }
    return null;

  };

  var opportunities = [ {
    id : 1,
    leadName : 'Amit',
    assignedTo : 'Anil Patel',
    nextStep : 'Call',
    source : 'Cold call',
    team : 'Hotwax systems',
    estimateAmount : 1000,
    description : 'Comment just for testing purpose amit',
    opportunityName:'New Equipments',
    probability: 50,
    initialStage: 'Prospect',
    initialAmount: 200
  }, {
    id : 2,
    leadName : 'Saket',
    assignedTo : 'Pranay Pandey',
    nextStep : 'Make lead',
    source : 'Conference',
    team : 'Hotwax systems',
    estimateAmount : 400,
    description : 'Comment just for testing purpose amit',
    opportunityName:'Upgradation',
    probability: 100,
    initialStage: 'Closed',
    initialAmount: 100
  }, {
    id : 3,
    leadName : 'Rahul',
    assignedTo : 'Mridul Pathak',
    nextStep : 'Make opportunity',
    source : 'Meeting',
    team : 'Hotwax systems',
    estimateAmount : 12000,
    description : 'Comment just for testing purpose amit',
    opportunityName:'Resources Avaibility',
    probability: 70,
    initialStage: 'Quoted',
    initialAmount: 8000
  } ];
});