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

//Using ng-options:

app.controller('myCar2',function($scope){
$scope.cars=[
    {model:"Ford Mustang",color:"Red"},
    {model:"Fiat 500",color:"White"},
    {model:"Volvo XC90",color:"Black"}
]
})

app.controller('myCar3', function($scope) {
    $scope.cars = {
        car01 : {brand : "Ford", model : "Mustang", color : "red"},
        car02 : {brand : "Fiat", model : "500", color : "white"},
        car03 : {brand : "Volvo", model : "XC90", color : "black"}
    }
});