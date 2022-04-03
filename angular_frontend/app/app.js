// CONFIG
const URL_PROJECT = 'http://localhost/angularjs/angular_frontend/';
const URL_API = 'http://localhost/angularjs/laravel_api/public/api/';

// Start Angular JS
var app = angular.module('app',['ngRoute']);

app.run(function($rootScope){
  $rootScope.title = 'Phoenix-code21';
})

// Angular Route
app.config(function($routeProvider) {
    $routeProvider
    .when("/login", {
      templateUrl : URL_PROJECT + "app/views/login.html",
    })
    .when("/register", {
      templateUrl : URL_PROJECT + "app/views/register.html"
    })
});

