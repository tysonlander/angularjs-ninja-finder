var myNinjaApp = angular.module('myNinjaApp', []);

// we put the function and scope in an array to protect it from code minification changes
myNinjaApp.controller('NinjaController', ['$scope', function ($scope) {
  $scope.message = 'hello world'
  $scope.removeNinja = function (ninja) {
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1)
  }

  $scope.addNinja = function () {
    $scope.ninjas.push({
      name: $scope.newninja.name,
      belt: $scope.newninja.belt,
      rate: parseInt($scope.newninja.rate),
      available: true
    });

    $scope.newninja.name = '';
    $scope.newninja.belt = '';
    $scope.newninja.rate = '';
  }

  $scope.ninjas = [
    {
      name: 'yoshi',
      belt: 'Green',
      rate: 50,
      available: true,
      thumb: "https://images.unsplash.com/photo-1570500002694-6d4d641887a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    }, {
      name: 'crystal',
      belt: 'Yellow',
      rate: 30,
      available: true,
      thumb: "https://images.unsplash.com/photo-1570500002694-6d4d641887a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    }, {
      name: 'ryu',
      belt: 'Orange',
      rate: 45,
      available: true,
      thumb: "https://images.unsplash.com/photo-1570500002694-6d4d641887a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    }, {
      name: 'shaun',
      belt: 'Black',
      rate: 20,
      available: true,
      thumb: "https://images.unsplash.com/photo-1570500002694-6d4d641887a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
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
