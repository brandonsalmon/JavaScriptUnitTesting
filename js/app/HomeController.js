angular.module('cap').controller('HomeController', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {

    $scope.people = [];

    $scope.filteredPeople = function () {
        return $filter('filter')($scope.people, $scope.filterText);
    }

    $scope.getData = function () {
        $http.get('/Api/Data?quantity=100').success(function (data) {
            $scope.people = data;
        });
    }
}]);