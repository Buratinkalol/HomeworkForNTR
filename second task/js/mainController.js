'use strict';
var mainApp = angular.module('mainApp', ['ngRoute']);
mainApp.controller('mainCtrl', function ($scope) {
    $scope.array = [];
    for (var i = 0; i < 10; i++){
        $scope.array[i] = i;
    }
    $scope.find = function(inputNum) {
        if ($scope.array.length > 1) {
            if (inputNum) {
                var i = 0, j = $scope.array.length, k;
                while (i < j) {
                    k = Math.floor((i+j)/2);
                    if (inputNum <= $scope.array[k]) j = k;
                    else i = k+1;
                }
                if ($scope.array[i] && $scope.array[i].toString() === inputNum) {
                    console.log("Yours number: = ", i);
                    $scope.result = i;
                } else {
                    console.log("Not found. Max value = ", $scope.array[$scope.array.length-1]);
                    $scope.result = $scope.array[$scope.array.length-1];
                }
            } else {
                $scope.result = "";
                return 0;
            }
        } else {
            console.log("ERROR 1: Less than one character")
        }
    };
    $scope.inputNumber = "Type ur number here . . .";
});