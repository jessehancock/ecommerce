angular.module('app').service('mainService', function($http) {
    this.getData = function() {
        return $http({
            method: "GET",
            url: '/api/products/'
        }).then(function(response) {
            return response.data;
        })
    }
})
