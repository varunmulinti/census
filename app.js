var angularApp =angular.module('Census',['ngResource','ngRoute']);
angularApp.config(function ($routeProvider,$httpProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'pages/landing.html',
    controller: 'HomeController',
    controllerAs: 'hc'
  })
  .when('/indiadetails',{
    templateUrl:'pages/second.html',
    controller:'SecondController',
    controllerAs:'sc'
  })
});
angularApp.controller("HomeController",['$resource',function($resource){
  var vm = this;
    vm.getdetails = function (){
    var details =$resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP',
   {FIPS:vm.country,time:vm.year,key:'4d7e81b99a7305297e1ed81f1f9c923a17010890'});
    vm.response = details.query();
    console.log(vm.response);
    return vm.response;

  }
}]);
angularApp.controller("SecondController",['$resource',function ($resource){
  var vm = this;
  var details =$resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=IN&time=2014&SEX=0&key=4d7e81b99a7305297e1ed81f1f9c923a17010890');
  vm.response = details.query();
  console.log(vm.response);
}]);




// angularApp.service('landingservice',function($resource,$routeParams){
//   var vm = this;
  // vm.country = "";
  // vm.year = "";
  // vm.getdetails = function (){
  //   var details =$resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP',
  //  {FIPS:vm.country,time:vm.year,key:'4d7e81b99a7305297e1ed81f1f9c923a17010890'});
  //   vm.response = details.query();
  //   return vm.response;
  //   console.log(vm.response);
  // }
// });
