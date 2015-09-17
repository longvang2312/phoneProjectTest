'use strict';

/* jasmine specs for controllers go here */
describe('controller', function() {

  describe('PhoneListCtrl', function(){
    var scope,ctrl, $httpBackend;
    beforeEach(module('phoneApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('app/data/phones.json').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
      scope = $rootScope.$new();
      ctrl = $controller('PhoneListCtrl', {$scope: scope});
    }));
    it('should create "phones" model with 2 phones', function() {
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();

      expect(scope.phones).toEqual([{name: 'Nexus S'},
        {name: 'Motorola DROID'}]);
    });
    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });
});
