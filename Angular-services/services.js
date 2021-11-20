
var app = angular.module('myApp', []);
app.controller('myTimeoutCntrl', function($scope, $timeout) {
  $scope.myHeader = "Hello World!";
  $timeout(function () {
      $scope.myHeader = "How are you today?";
  }, 2000);
});


app.controller('myIntervalCtrl',function($scope,$interval){
    $scope.theTime= new Date().toLocaleTimeString();
    $interval(function(){
      $scope.theTime=new Date().toLocaleTimeString();
    },1000);
});