// tao module
var app = angular.module('app',[]);
// gan controller voi module
app.controller('contactController',function($scope){
    var uid =1;
    // contacts: là một mảng các thuộc tính chứa giá trị(propreties) của model
    $scope.contacts=[
        {
            id:0,
            'name':'An',
            'email':'an@gmail.com',
            'phone':'0123456789'
        }
    ];
    $scope.saveContact = function(){
        if($scope.newcontact.id == null){
            $scope.newcontact.id = uid++ ; 
            $scope.contacts.push($scope.newcontact);
        } else{
            console.log('id not null');
            for(i in $scope.contacts){
                if($scope.contacts[i].id == $scope.newcontacts.id){
                    $scope.contacts[i] = $scope.newcontact;
                }
            }
        }
        $scope.newcontact = {};
    }
    $scope.delete = function(id){
        for (i in $scope.contacts){
            if($scope.contacts[i].id == id){
                $scope.contacts.splice(i,1);
                $scope.newcontact=[]
            }
        }
    }
    $scope.edit = function(id){
        for (i in $scope.contacts){
            if($scope.contacts[i].id == id){
                $scope.newcontact = angular.copy($scope.contacts[i])
            }
        }
    }
    
});