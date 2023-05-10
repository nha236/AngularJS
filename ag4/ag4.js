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
        },
        {
            id:1,
            'name':'An',
            'email':'an@gmail.com',
            'phone':'0123456789'
        },
        {
            id:2,
            'name':'An',
            'email':'an@gmail.com',
            'phone':'0123456789'
        }
    ];
});