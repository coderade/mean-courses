'use strict';
var meanApp = angular.module('app', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider){
        var routeAuth = {
            admin: {
                auth: function (authService) {
                    return authService.authRouteAcessFor('admin')
                }
            },
            user: {
                auth: function (authService) {
                    return authService.authAuthenticatedUserForRoute()
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
            .when('/signup', {
                templateUrl:  '/partials/account/signup',
                controller: 'signupController'
            })
            .when('/profile', {
                templateUrl:  '/partials/account/profile',
                controller: 'profileController',
                resolve: routeAuth.user
            })
            .when('/courses', {
                templateUrl: '/partials/courses/courses-list',
                controller: 'coursesListController'
            })
            .when('/courses/:id', {
                templateUrl: '/partials/courses/course-details',
                controller: 'courseDetailsController'
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


