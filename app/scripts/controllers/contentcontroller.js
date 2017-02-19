'use strict';

/**
 * @ngdoc function
 * @name app.controller:ContentcontrollerCtrl
 * @description
 * # ContentcontrollerCtrl
 * Controller of the app
 */
angular.module('app')
    .controller('contentController', function($scope, $mdDialog, userService) {
    $scope.openFromLeft = function() {
        $mdDialog.show(
        $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Transferência realizada com sucesso.')
            .textContent('Obrigado por usar nossos serviços!')
            .ariaLabel('Left to right demo')
            .ok('Nice!')
            // You can specify either sting with query selector
            .openFrom('#left')
            // or an element
            .closeTo(angular.element(document.querySelector('#right')))
        );
    };
  });
