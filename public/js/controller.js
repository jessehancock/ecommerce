angular.module('app').controller('mainCtrl', function($scope, mainService) {

    mainService.getData().then(function(response) {
        $scope.menu = response;
    })
    $scope.postData = function(obj) {
        mainService.postData(obj).then(function(response) {
            alert('You have successfully added something to your cheesy menu');
        })
    }
    $scope.deleteData = function(str) {
        mainService.deleteData(str._id).then(function(response) {
            alert('You have successfully deleted said item');
        })
    }
})
