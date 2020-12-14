(function(angular) {
  'use strict';
angular.module('ngApp-Demo', [])

.controller('Kontrolli1', Kontrolli1);
  function Kontrolli1($scope) {
    $scope.name = '';
  }
  Kontrolli1.$inject = ['$scope'];
})(window.angular);
