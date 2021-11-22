var app = angular.module('myApp', []);

app.controller ('myCtrl',function($scope){
    $scope.names=["Email","Tobias","Linus"];
})

//ng-repeat directive to create dropdown lists

app.controller('myCar',function($scope){
$scope.cars=[
    {model:"Ford Mustang",color:"Red"},
    {model:"Fiat 500",color:"White"},
    {model:"Volvo XC90",color:"Black"}
]
})

//ng-repeat directive as object

app.controller('myCar1',function($scope){
$scope.cars=[
    {model:"Ford Mustang",color:"Red"},
    {model:"Fiat 500",color:"White"},
    {model:"Volvo XC90",color:"Black"}
]
})