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
    leadSource : 'Cold call',
    team : 'Hotwax systems',
    likely : 1000,
    description : 'Comment just for testing purpose amit'
  }, {
    id : 2,
    leadName : 'Saket',
    assignedTo : 'Pranay Pandey',
    nextStep : 'Make lead',
    leadSource : 'Conference',
    team : 'Hotwax systems',
    likely : 400,
    description : 'Comment just for testing purpose amit'
  }, {
    id : 3,
    leadName : 'Rahul',
    assignedTo : 'Mridul Pathak',
    nextStep : 'Make opportunity',
    leadSource : 'Meeting',
    team : 'Hotwax systems',
    likely : 12000,
    description : 'Comment just for testing purpose amit'
  } ];
});