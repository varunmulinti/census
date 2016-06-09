var angularApp =angular.module('Census',['ngResource','ngRoute']);
angularApp.config(function ($routeProvider,$httpProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'pages/landing.html',
    controller: 'HomeController',
    controllerAs: 'hc'
  })
});
angularApp.controller("HomeController",['$resource','$routeParams','landingservice',function($resource,$routeParams,landingservice){
  var vm = this;
  vm.details = landingservice.getdetails();
  console.log(vm.details);
}]);



angularApp.service('landingservice',function($resource,$routeParams){
  var vm = this;
  vm.getdetails = function (){
    var details =$resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=IN&time=2012')
    vm.response = details.query();
    return vm.response;
    console.log(vm.response);
  }
});
