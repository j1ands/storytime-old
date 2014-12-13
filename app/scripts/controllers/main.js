'use strict';

/**
 * @ngdoc function
 * @name storytimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storytimeApp
 */
angular.module('storytimeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
