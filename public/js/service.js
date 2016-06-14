angular.module('app').service('mainService', function($http) {
    this.getData = function() {
        return $http({
            method: "GET",
            url: '/api/products/'
        }).then(function(response) {
            return response.data;
        })
    }

    this.postData = function(food) {
        return $http({
            method: "POST",
            url: '/api/products/',
            data: food
        })
    }
    this.deleteData = function(food) {
        return $http({
            method: "DELETE",
            url: '/api/products/' + food,
            data: food
        })
    }
})
