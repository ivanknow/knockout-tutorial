(function () {
  'use strict';

  angular.module('korter', [
    'ngRoute',
    'io.file'
  ])

    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.otherwise({ redirectTo: '/' });
    }]);

})();