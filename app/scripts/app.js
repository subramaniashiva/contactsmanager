'use strict';
angular.module('configuration', [])
       .constant('API_END_POINT','80')
       .constant('HOST','http://localhost')
	   .constant('PHP_PATH','mailfetcher/mailfetch.php');

angular.module('angularyeomanApp', [
  'configuration',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
