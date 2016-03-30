meanApp.controller('signupController', function ($scope, notifierService, userResource, $location, authService) {

    $scope.signup = function () {
        var newUserData = {
            username: $scope.username,
            password: $scope.password,
            firstName: $scope.firstName,
            lastName: $scope.lastName
        };

        authService.createUser(newUserData).then(function () {
            notifierService.notify('User account created!');
            $location.path('/');
        }, function (reason) {
            notifierService.error(reason);
        })
    }

});
