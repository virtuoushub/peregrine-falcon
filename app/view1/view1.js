'use strict';

angular.module('twitterApp.view1', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', '$http', '$httpParamSerializerJQLike', function($scope, $http, $httpParamSerializerJQLike) {
    $scope.alerts = [];
    $scope.twitterIds = [];
    $scope.master = {};
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    $scope.update = function(twitter) {
      $scope.master = angular.copy(twitter);
      var data = $httpParamSerializerJQLike({
        username: twitter.username,
        searchTerm: twitter.searchTerm,
        count: twitter.tweetCount,
        location: twitter.location
      });

      var config = {
          headers : {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
          }
      }

      $http.post('http://127.0.0.1:5000/search', data, config).then(function successCallback(response) {
        $scope.twitterIds = [];
        for (let status of response.data.statuses) {
          if(!$scope.twitterIds.includes(status.id_str)) {
            if(status.is_quote_status && !$scope.twitterIds.includes(status.quoted_status_id_str)) {
              $scope.twitterIds.push(status.quoted_status_id_str);
              continue;
            }
            if(status.retweeted_status && status.retweeted_status.id) {
              if(!$scope.twitterIds.includes(status.retweeted_status.id.toFixed(0))) {
                $scope.twitterIds.push(status.retweeted_status.id.toFixed(0));
                continue;
              } else if ($scope.twitterIds.includes(status.retweeted_status.id.toFixed(0))) {
                continue;
              }
            }
            $scope.twitterIds.push(status.id_str);
          }
        }
        if (response.data.statuses.length === 0) {
          $scope.alerts.push({ type: 'warning', msg: 'No results found. Please try a differnt search.' });
        }
      }, function errorCallback(response) {
        $scope.alerts.push({msg: response.statusText});
      });

      $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };
    };

    $scope.reset = function() {
      $scope.twitter = {};
      $scope.twitterIds = [];
    };

    $scope.reset();
  }]);
