'use strict';

angular.module('parTripMeanApp', [
  'parTripMeanApp.auth',
  'parTripMeanApp.admin',
  'parTripMeanApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
