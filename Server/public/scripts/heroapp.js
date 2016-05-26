var heroApp = angular.module('heroApp', ['ngRoute']);

heroApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .when('/corn', {
      templateUrl: '/views/corn.html',
      controller: "cornController"
    })
    .when('/capt', {
      templateUrl: '/views/cpt.html',
      controller: "cptController"
    })
    .when('/cat', {
      templateUrl: '/views/cat.html',
      controller: "catController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
