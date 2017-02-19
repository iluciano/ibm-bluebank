'use strict';

describe('Controller: ToolbarcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('ibmBlueBankApp'));

  var ToolbarcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToolbarcontrollerCtrl = $controller('ToolbarcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ToolbarcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
