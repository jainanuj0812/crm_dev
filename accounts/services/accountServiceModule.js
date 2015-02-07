var accountServiceModule=angular.module('accountServiceModule',['crmAccount','accountControllerModule']);
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
{id:1, firstName:'Amit', lastName:'Gadaley', email:'agadaley@gmail.com', phoneNo:9584593069,address:'cm-44',state:'madhya pradesh',country:'india',company:'hotwax systems',position:'engineer',dob:'1993-04-17'},
{id:2, firstName:'Aman', lastName:'Agrawal', email:'aman@gmail.com', phoneNo:4512789632,address:'cm-12',state:'madhya pradesh',country:'india',company:'hotwax systems',position:'engineer',dob:'1993-04-17'},
{id:3, firstName:'Anuj', lastName:'jain', email:'anuj@gmail.com', phoneNo:7845124152,address:'dm-25',state:'madhya pradesh',country:'india',company:'hotwax systems',position:'engineer',dob:'1993-04-17'},
{id:4, firstName:'Saket', lastName:'Baghel', email:'saket@gmail.com', phoneNo:9696562385,address:'gh-44',state:'madhya pradesh',country:'india',company:'hotwax systems',position:'engineer',dob:'1993-04-17'},
{id:5, firstName:'Rahul', lastName:'Bhammaker', email:'rahul@gmail.com', phoneNo:9656899556,address:'ym-44',state:'madhya pradesh',country:'india',company:'hotwax systems',position:'engineer',dob:'1993-04-17'} 
];
});