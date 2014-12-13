'use strict';

/**
 * @ngdoc service
 * @name storytimeApp.searchKeys
 * @description
 * # searchKeys
 * Factory in the storytimeApp.
 */
angular.module('storytimeApp')
  .factory('searchKeys', function ($resource) {
    return $resource('http://localhost:3000/');
    });
