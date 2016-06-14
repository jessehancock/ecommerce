angular.module('app').controller('mainCtrl', function($scope, mainService){

  mainService.getData().then(function(response){
    $scope.menu = response;
  })
})
