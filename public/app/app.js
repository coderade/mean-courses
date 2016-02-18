'use strict';
var meanApp = angular.module('app', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider ){

        var checkRole = {
            admin: {
                auth: function (authService) {
                    authService.autRouteAcessFor('admin');
                }
            }
        };

        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl : '/partials/main/main',
                controller: 'mainCtrl'
            })
            .when('/admin/users', {
                templateUrl : '/partials/admin/users-list',
                controller: 'userListController',
                resolve: checkRole.admin
            })
    });

meanApp.run(function ($rootScope, $location) {
    debugger;
    $rootScope.$on("$routeChangeError", function (evt, current, previous, rejection) {
        debugger;
        console.log(rejection);
        if(rejection === 'not auhorized' ){
            $location.path('/');
        }
        else{
            console.log('wtf???')
        }

    })
});