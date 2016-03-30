meanApp.controller('loginCtrl', function ($scope, $http, identifierService, notifierService, authService, $location) {
    $scope.identity = identifierService;
    $scope.signin = function (username, password) {
        authService.authenticateUser(username, password)
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
                $scope.username = '';
                $scope.password = '';
                notifierService.info('You have sucessfully signed out!');
                $location.path('/');
            })
    }
});