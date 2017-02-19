(function () {
    'use strict';
    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('logado', {
                
                url: '/logado',
                templateUrl: '../app/views/contentView.html',
                controller: 'contentController',
                cache: true
            })
            .state('logout', {

                url: '/logout',
                templateUrl: '../app/views/logoutView.html',
                controller: 'contentController',
                cache: true
            })
        })
})();