meanApp.factory('identifierService', function ($window, userResource) {
    var currentUser;
    if(!!$window.currentUserObj){
        currentUser = new userResource();
        angular.extend(currentUser, $window.currentUserObj);
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function () {
            return !!this.currentUser;
        },
        isAuthorized: function (role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }
})
