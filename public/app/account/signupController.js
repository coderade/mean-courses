meanApp.controller('signupController', function ($scope, notifierService, userResource, $location, authService) {

    $scope.signup = function () {
        var newUserData = {
            email: $scope.email,
            password: $scope.pass,
            firstName: $scope.firstName,
            lastName: $scope.lastName
        };

        if($scope.pass && $scope.pass.length > 0){
            newUserData.password = $scope.pass;
        }

        authService.createUser(newUserData).then(function () {
            notifierService.notify('User account created!');
            $location.path('/');
        }, function (reason) {
            notifierService.error(reason);
        })
    }

});
