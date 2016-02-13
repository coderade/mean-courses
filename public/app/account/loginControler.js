meanApp.controller('loginCtrl', function ($scope, $http, identifierService, notifierSvc, authService, $location) {
    $scope.identity = identifierService;
    $scope.signin = function (username, password) {
        authService.authenticateUser(username, password)
            .then(function (success) {
                if(success){
                    notifierSvc.notify('You have sucessfully signed in!')
                } else{
                    notifierSvc.error('Username/password combination incorrect!')
                }
            });
        };
    $scope.signout = function () {
        authService.logoutUser()
            .then(function () {
                $scope.username = '';
                $scope.password = '';
                notifierSvc.info('You have sucessfully signed out!');
                $location.path('/');
            })
    }
});