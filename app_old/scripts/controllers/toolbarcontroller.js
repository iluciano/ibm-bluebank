'use strict';

/**
 * @ngdoc function
 * @name app.controller:ToolbarcontrollerCtrl
 * @description
 * # ToolbarcontrollerCtrl
 * Controller of the app
 */
angular.module('app')
    .controller('toolbarController', function($scope, userService) {
        $scope.logar = function(user){
            userService.validaLogin(user);
        }
        $scope.logout = function(){
            userService.logout();
        }
  });
