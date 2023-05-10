app.controller('myController',function($scope){
    $scope.list=['A','E','I','O','U'];
    $scope.choice="Your choice is: FPT-Aptech";

    $scope.ch = function(choice){
        $scope.choice = "your choice is: " + choice;
    };

    $scope.c = function(){
        $scope.choice = "your choice is: " + $scope.mychoice;
    };
});