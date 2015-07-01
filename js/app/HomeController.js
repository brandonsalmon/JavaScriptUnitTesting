angular.module('cap').controller('HomeController', ['$scope', '$http', function ($scope, $http) {

    $scope.people = [];

    $scope.getData = function () {
        $http.get('/Api/Data').success(function (data) {
            $scope.people = data;
        });
    }
}]);