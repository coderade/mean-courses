meanApp.controller('loginCtrl', function ($scope, $http, identifierService, notifierSvc, authService, $q) {
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
});