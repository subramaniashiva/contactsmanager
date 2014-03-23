'use strict';

angular.module('contactsmanagerApp')
    .controller('MainCtrl', ['$scope',
        function ($scope) {
            $scope.currentProvider = 'All';
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
              ];
          }
    ]);
angular.module('contactsmanagerApp')
    .controller('GoogleCtrl', ['$scope','$http',
        function ($scope,$http) {
            $scope.currentProvider = 'Google';
			//$scope.mailData = {};
            var clientId = '113508292285-5utfjh2rugdfsmu23otdvdv85j313kqc.apps.googleusercontent.com';
                // Enter the API key from the Google Develoepr Console - to handle any unauthenticated requests in the code.
            var apiKey = 'AIzaSyBZ4cSjlMPm3amcaSHH6GvYZPqeyqpc_CU';
                //Scopes define the kind of service that you wat from google
                //Since we are requesting gmail contacts, the scope here refers to the contact fetch
                // To enter one or more authentication scopes, refer to the documentation for the API.
            var scopes = 'https://www.google.com/m8/feeds';
                //If you change the below variable to any valid google mail id, it will then fetch the contacts from that mail id [ofcourse with users permission]
            var mailid = 'default';
            $scope.authorizeGoogle = function getAuthorization() {
                // Enter a client ID for a web application from the Google Developer Console.
                // In your Developer Console project, add a JavaScript origin that corresponds to the domain
               
              gapi.auth.authorize({
                client_id: clientId,
                scope: scopes,
                immediate: false
              }, handleAuthResult);
              return false;
            };

            function handleAuthResult(authResult) {
                //var authorizeButton = document.getElementById('authorize-button');
                if (authResult && !authResult.error) {
                    //authorizeButton.style.visibility = 'hidden';
                  makeApiCall(mailid);
                } else {
                    //authorizeButton.style.visibility = '';
                    //authorizeButton.onclick = handleAuthClick;
                }
              }
			/*$scope.apiCallBack = function(data){
				console.log('in apiCallBack');
				$scope.mailData = data;
				$scope.firstAddress = $scope.mailData.feed.entry[3].gd$email[0].address;
                //console.log(output.feed.entry[0].gd$email[0].address);
                //console.log(output.feed.entry[0].title.$t);
                console.log('Success');
			}*/
            function makeApiCall(mailid) {
                var authParams = gapi.auth.getToken();
                //authParams.max-results = '9999';
                //authParams.start-index = '2';
				$http.jsonp('https://www.google.com/m8/feeds/contacts/' + mailid + '/full?max-results=9999&dataType=jsonp&alt=json&callback=JSON_CALLBACK&'+$.param(authParams))
				.success(function(data,status,config){
					console.log('in success callback');
					$scope.mailData = data;
					$scope.firstAddress = $scope.mailData.feed.entry[3].gd$email[0].address;
                    //console.log(output.feed.entry[0].gd$email[0].address);
                    //console.log(output.feed.entry[0].title.$t);
                    console.log('Success');
					});
               /* $.ajax({
                    method: 'GET',
                    url: 'https://www.google.com/m8/feeds/contacts/' + mailid + '/full?max-results=9999',
                    dataType: 'jsonp',
                    data: authParams,
                    success: function (data) {
                        console.log(data, $scope);
						$scope.mailData = data;
						$scope.firstAddress = $scope.mailData.feed.entry[3].gd$email[0].address;
                        //console.log(output.feed.entry[0].gd$email[0].address);
                        //console.log(output.feed.entry[0].title.$t);
                        console.log('Success');
                      }
                  });*/
              }
            //Get authorization from google user
            //authorize();
            var contacts = function fetchContacts() {};
            //Get his contact details from google server using google api
            contacts();
		      }
		
    ]);
angular.module('contactsmanagerApp')
    .controller('YahooCtrl', ['$scope',
        function ($scope) {
            $scope.currentProvider = 'Yahoo';
          }
    ]);