
var app = angular.module('myApp', []);
app.controller('myTimeoutCntrl', function($scope, $timeout) {
  $scope.myHeader = "Hello World!";
  $timeout(function () {
      $scope.myHeader = "How are you today?";
  }, 2000);
});

//interval service
app.controller('myIntervalCtrl',function($scope,$interval){
    $scope.theTime= new Date().toLocaleTimeString();
    $interval(function(){
      $scope.theTime=new Date().toLocaleTimeString();
    },1000);
});

// custom Service to convert given number into hexadecimal number

app.service('hexafy',function(){
  this.myFunc = function(x){
    return x.toString(16);
  }
});

app.controller('myOwnService',function($scope, hexafy){
  $scope.hex=hexafy.myFunc(255);
})

//Custom filter
app.filter('myFormat',['hexafy',function(hexafy){
  return function(x){
    return hexafy.myFunc(x);
  }
}])