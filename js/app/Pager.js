angular.module('cap').controller('capPagerController', ['$scope', function ($scope) {

    $scope.capPagerStartFrom = 0;
    $scope.capPagerPageSize = 10;

}]).directive('capPager', function () {
    return {
        scope: {
            capPagerItems: '=',
            capPagerPageSize: '=',
            capPagerStartFrom: '='
        },
        controller: 'capPagerController',
        templateUrl: '/js/app/Pager.html'
    };
});