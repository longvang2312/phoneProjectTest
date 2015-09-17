angular
  .module('phoneApp', [])
  .controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
      'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM\u2122 with Wi-Fi',
      'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM\u2122',
      'snippet': 'The Next, Next Generation tablet.'}
  ];
    $scope.orderProp = 'age';
});