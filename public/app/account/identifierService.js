meanApp.factory('identifierService', function () {
    return {
        currentUser: undefined,
        isAuthenticated: function () {
            return !!this.currentUser;
        }
    }
})
