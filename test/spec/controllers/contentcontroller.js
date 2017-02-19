'use strict';

describe('Controller: ContentcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('ibmBlueBankApp'));

  var ContentcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContentcontrollerCtrl = $controller('ContentcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContentcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
