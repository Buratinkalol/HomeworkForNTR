'use strict';
var mainApp = angular.module('mainApp', ['ngRoute']);
mainApp.controller('mainCtrl', function ($scope) {
    $scope.array = [1,2,-3,-5,10,-20,5,-50,5,10,20,-1,10];
    $scope.find = function() {
        $scope.max_ending_here = $scope.array[0];
        $scope.max_so_far = $scope.array[0];
        for (var i = 0; i< $scope.array.length; i++) {
            $scope.max_ending_here = Math.max($scope.array[i], $scope.max_ending_here + $scope.array[i]);
            $scope.max_so_far = Math.max($scope.max_so_far, $scope.max_ending_here);
        }
        console.log($scope.max_so_far);
    };
    $scope.inputNumber = "Type ur number here . . .";
});