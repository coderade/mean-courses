meanApp.factory('authService', function ($http, identifierService, $q, userResource) {
    return{
        authenticateUser: function (username, password) {
            //debugger;
            var dfd = $q.defer();
            $http.post('/login', { username: username, password: password }).then(function (response){
                if(response.data.success){
                    var user = new userResource();
                    angular.extend(user, response.data.user);
                    identifierService.currentUser = user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }

            });
            return dfd.promise;
        },
        logoutUser: function () {
            var dfd = $q.defer();
            $http.post('/logout', {logout: true})
                .then(function () {
                    identifierService.currentUser = undefined;
                    dfd.resolve();
                });
            return dfd.promise;
        },

        autRouteAcessFor:  function (role) {
            if(identifierService.isAuthorized(role)){
                return true
            } else {
                //debugger;
                return $q.reject('not auhorized');

            }
        }

    }
});
