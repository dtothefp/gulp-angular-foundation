var app = angular.module('myApp', ['ngResource', 'ui.router', 'ui.sortable', 'gridster']);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('draggable', {
      url: "/",
      templateUrl: "draggable.html"
    })
    .state('gridster', {
      url: "/gridster",
      templateUrl: "gridster.html"
    })
});
