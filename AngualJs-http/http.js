var app = angular.module("myApp",[]);

app.controller('myCtrl',function($scope,$http){
    $http.get("welcome.htm").then(function(response){
        $scope.myWelcome=response.data;
    });
});
//Get method for http service
app.controller('myCtrl',function($scope,$http){
    $http({
        method:"GET",
        url :"welcome.htm"
    }).then(function mySuccess(response){
        $scope.myWelcome=response.data;
    },function myError(response){
        $scope.myWelcome=response.statusText;
    });
});
