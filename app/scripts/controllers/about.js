'use strict';

/**
 * @ngdoc function
 * @name storytimeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the storytimeApp
 */
angular.module('storytimeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
