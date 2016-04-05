meanApp.controller('loginCtrl', function ($scope, $http, identifierService, notifierService, authService, $location) {
    $scope.identity = identifierService;
    $scope.signin = function (email, password) {
        authService.authenticateUser(email, password)
            .then(function (success) {
                if(success){
                    notifierService.notify('You have sucessfully signed in!')
                } else{
                    notifierService.error('Username/password combination incorrect!')
                }
            });
        };

    $scope.signout = function () {
        authService.logoutUser()
            .then(function () {
                $scope.email = '';
                $scope.password = '';
                notifierService.info('You have sucessfully signed out!');
                $location.path('/');
            })
    }
});