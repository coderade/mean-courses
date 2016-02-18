meanApp.controller('userListController', function ($scope, userResource) {
    $scope.users = userResource.query();

});