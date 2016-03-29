'use strict';
var meanApp = angular.module('app', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider){
        var routeAuth = {
            admin: {
                auth: function (authService) {
                    return authService.authRouteAcessFor('admin')
                }
            }
        };

        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: '/partials/main/main',
                controller: 'mainCtrl'
            })
            .when('/admin/users', {
                templateUrl : '/partials/admin/users-list',
                controller: 'userListController',
                resolve: routeAuth.admin
            })
    });



meanApp.run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        console.log(rejection);
        if(rejection === 'NOT_AUTHORIZED' ){
            $location.path('/');
        }
    })
});

