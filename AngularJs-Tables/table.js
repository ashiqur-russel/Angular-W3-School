var app = angular.module("myApp",[]);

app.controller('myPersonCtrl', function($scope,$http){
    $http.get("customers.php").then(function(response){
        $scope.names=response.data.records;
    });
});