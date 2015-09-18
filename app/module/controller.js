angular
  .module('phoneAppController', [])
  .controller('PhoneListCtrl', ['$scope', '$http',
    function ($scope, $http) {
      $http.get('app/data/phones.json').success(function (data) {
        $scope.phones = data;
      });

      $scope.orderProp = 'age';
    }])
  .controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
      $http.get('app/data/' + $routeParams.phoneId + '.json').success(function (data) {
        $scope.phone = data;
      });
    }]);
