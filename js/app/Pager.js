angular.module('cap').controller('capPagerController', ['$scope', function ($scope) {

    $scope.capPagerStartFrom = 0;
    $scope.capPagerPageSize = 10;

    $scope.previousPage = function () {
        $scope.capPagerStartFrom -= $scope.capPagerPageSize;
    }

    $scope.nextPage = function () {
        $scope.capPagerStartFrom += $scope.capPagerPageSize;
    }

    $scope.goToPage = function (page) {
        $scope.capPagerStartFrom = (page - 1) * $scope.capPagerPageSize;
    }

    $scope.pageNumber = function () {
        if ($scope.capPagerStartFrom >= $scope.capPagerItems.length || $scope.capPagerStartFrom < 0) {
            $scope.capPagerStartFrom = 0;
        }

        return ($scope.capPagerStartFrom / $scope.capPagerPageSize) + 1;
    }

    $scope.pages = function () {
        var result = [];
        var page = 1;

        for (var i = 0; i < $scope.capPagerItems.length; i += $scope.capPagerPageSize) {
            result.push(page);
            page++;
        }

        return result;
    }

}]).directive('capPager', function () {
    return {
        scope: {
            capPagerItems: '=',
            capPagerPageSize: '=',
            capPagerStartFrom: '='
        },
        restrict: 'E',
        controller: 'capPagerController',
        templateUrl: '/js/app/Pager.html'
    };
});