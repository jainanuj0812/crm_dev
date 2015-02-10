var contactServiceModule=angular.module('crmApp.contactServiceModule',['crmApp.contactControllerModule']);
contactServiceModule.service('contactService',function(){

this.getContacts=function(){
		return contacts;
	};

	this.getContact=function(id){
        for(var i=0;i<contacts.length-1;i++)
        {
            if(id==contacts[i].id)
                {return contacts[i];}
                
        }
        return null;
            
   };
	
var contacts=[
{id:1, firstName:'Amit', lastName:'Gadaley', email:'agadaley@gmail.com', phoneNo:9584593069,address:'HB-32 Palasia Sqare 450234',state:'Madhya pradesh',country:'India',company:'HotWax Systems',position:'Enterprise software  engineer',dob:'17-04-1993'},
{id:2, firstName:'Aman', lastName:'Agrawal', email:'aman@gmail.com', phoneNo:4512789632,address:'LIG-52 Ananand Nagar 542263',state:'Madhya pradesh',country:'India',company:'HotWax Systems',position:'Enterprise software  engineer',dob:'23-02-1993'},
{id:3, firstName:'Anuj', lastName:'jain', email:'anuj@gmail.com', phoneNo:7845124152,address:'MIG-25 Ashok vihar',state:'Madhya pradesh',country:'India',company:'HotWax Systems',position:'Enterprise software  engineer',dob:'12-05-1993'},
{id:4, firstName:'Saket', lastName:'Baghel', email:'saket@gmail.com', phoneNo:9696562385,address:'Plot no-12 Twin Tower',state:'Madhya pradesh',country:'India',company:'HotWax Systems',position:'Enterprise software  engineer',dob:'13-05-1993'},
{id:5, firstName:'Rahul', lastName:'Bhammaker', email:'rahul@gmail.com', phoneNo:9656899556,address:'911 World Trade Colony',state:'Madhya pradesh',country:'India',company:'HotWax Systems',position:'Enterprise software  engineer',dob:'12-05-1993'} 
];
});