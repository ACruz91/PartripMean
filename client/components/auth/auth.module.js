'use strict';

angular.module('parTripMeanApp.auth', [
  'parTripMeanApp.constants',
  'parTripMeanApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
