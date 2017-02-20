'use strict';
angular.module('app')
    .controller('toolbarController', function($scope, userService) {
        $scope.logar = function(user){
            userService.validaLogin(user);
        }
        $scope.logout = function(){
            userService.logout();
        }
});