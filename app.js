var angularApp =angular.module('Census',['ngResource','ngRoute']);
angularApp.config(function ($routeProvider,$httpProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'pages/landing.html',
    controller: 'HomeController',
    controllerAs: 'hc'
  })
  
}
