var myNinjaApp = angular.module('myNinjaApp', []);

// we put the function and scope in an array to protect it from code minification changes
myNinjaApp.controller('NinjaController', ['$scope', function ($scope) {
  $scope.message = 'hello world'
  $scope.removeNinja = function (ninja) {
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1)
  }

  $scope.ninjas = [
    {
      name: 'yoshi',
      belt: 'Green',
      rate: 50,
      available: true
    }, {
      name: 'crystal',
      belt: 'Yellow',
      rate: 30,
      available: true
    }, {
      name: 'ryu',
      belt: 'Orange',
      rate: 45,
      available: true
    }, {
      name: 'shaun',
      belt: 'Black',
      rate: 20,
      available: true
    }];
}]);

/*
// this runs before the application runs (stuff like setting up routs)
myNinjaApp.config(function () {

});

// This controls what is running while the application is running
myNinjaApp.run(function () {

});

myNinjaApp.controller

*/
