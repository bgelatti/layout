angular
  .module('app', ['gumga.layout'])
  .controller('controller', controller)
  
  controller.$inject = ['$scope', '$http', '$timeout']
  function controller($scope, $http, $timeout) {
    $scope.navCollapse = function() {
      document.querySelector('.gumga-layout nav > .menu')
        .classList.toggle('collapsed')
    }
    $scope.toggleSearch = function() {
      document.querySelector('header > .searchbar')
        .classList.toggle('searchShow')
    }
    
    $http.get('assets/data/organizations.json')
      .then(function(response) {
        $scope.organizations = response.data
      })
    $timeout(function() {      
      $http.get('assets/data/menu.json')
        .then(function(response) {
          $scope.menu = response.data
        })
    }, 1000)
    $timeout(function() {      
      $http.get('assets/data/keys.json')
        .then(function(response) {
          $scope.keys = response.data
        })
    }, 2000)
    
  }