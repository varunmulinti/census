var angularApp =angular.module('Census',['ngResource','ngRoute']);
angularApp.config(function ($routeProvider,$httpProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'pages/landing.html',
    controller: 'HomeController',
    controllerAs: 'hc'
  })
});
angularApp.controller("HomeController",['$resource','$routeParams',function($resource,$routeParams){
  var vm = this;
  // var id = $route
  var details = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=us&time=2010')
  vm.response = details.query();
  console.log(vm.response);
}]);
