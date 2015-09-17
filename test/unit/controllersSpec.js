'use strict';

/* jasmine specs for controllers go here */
describe('controller', function() {

  describe('PhoneListCtrl', function(){

    beforeEach(module('phoneApp'));

    it('should create "phones" model with 3 phones', inject(function($controller) {
      var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});

      expect(scope.phones.length).toBe(3);
    }));

  });
});