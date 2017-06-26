'use strict';

// Declare app level module which depends on views, and components
angular.module('twitterApp', [
  'ngRoute',
  'twitterApp.view1',
  'twitterApp.view2',
  'twitterApp.view3',
  'twitterApp.version',
  'ngtweet',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});

}]);
