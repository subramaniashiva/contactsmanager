'use strict';

angular.module('angularyeomanApp')
  .controller('MainCtrl', ['$scope', '$http', 'HOST', 'API_END_POINT', 'PHP_PATH', function ($scope,$http,$host,$apiEndPoint,$phpPath) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get($host+':'+$apiEndPoint+'/'+$phpPath).success(function(data) {
      $scope.mails = data;
	  });
  }]);
