'use strict';
angular.module('allContacts')
    .controller('allContactsCtrl', ['$scope',
        function ($scope) {
            $scope.allContactList = {};
          }
    ]);
angular.module('contactsmanagerApp', [
  'allContacts',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'GoogleCtrl'
      })
	  .when('/google', {
        templateUrl: 'views/main.html',
        controller: 'GoogleCtrl'
      })
	  .when('/yahoo', {
        templateUrl: 'views/main.html',
        controller: 'YahooCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
