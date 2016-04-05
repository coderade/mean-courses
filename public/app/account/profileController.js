meanApp.controller('profileController', function ($scope, authService, identifierService, notifierService) {

    $scope.email = identifierService.currentUser.email;
    $scope.firstName = identifierService.currentUser.firstName;
    $scope.lastName = identifierService.currentUser.lastName;


    $scope.update = function () {
        var newUserData = {
          email: $scope.email,
          firstName: $scope.firstName,
          lastName: $scope.lastName
        };

        if($scope.pass && $scope.pass.length > 0){
            newUserData.password = $scope.pass;
        }

        authService.updateCurrentUser(newUserData).then(function () {
            notifierService.notify('Your user account has been updated');
        }, function (reason) {
            notifierService.error(reason);
        })
    }
});
