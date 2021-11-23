var app = angular.module("myApp",[]);
app.controller('myCtrl',function($scope){
    $scope.count=0;
})

app.controller('myClick',function($scope){
    $scope.count=0;
    $scope.myFunction= function(){
        $scope.count++;
    }
})

app.controller('myToggle',function($scope){
    $scope.showMe=false;
    $scope.myFunction= function(){
        $scope.showMe=!$scope.showMe;
    }
})