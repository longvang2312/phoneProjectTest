angular
  .module('phoneApp', [])
  .controller('PhoneListCtrl', function ($scope, $http) {
    $http.get('app/data/phones.json').success(function(data) {
      $scope.phones = data;
    });
    $scope.orderProp = 'age';
});