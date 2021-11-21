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



app.controller('myCtrl1', function($scope, $http) {
    $http.get("welcome.htm")
    .then(function(response) {
        $scope.content = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;            
    });
});
//Http request fro getting json data
app.controller('customersCtrl',function($scope,$http){
    $http.get("customer.php").then(function(response){
        $scope.myData=response.data.records;
    })
})