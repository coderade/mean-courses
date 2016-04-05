meanApp.factory('authService', function ($http, identifierService, $q, userResource) {
    return{
        createUser: function (newUserData) {
            var newUser = new userResource(newUserData);
            var dfd = $q.defer();

            newUser.$save().then(function () {
                identifierService.currentUser = newUser;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        },

        updateCurrentUser: function (newUserData) {
            var dfd = $q.defer();
            var userClone = angular.copy(identifierService.currentUser);

            angular.extend(userClone, newUserData);
            userClone.$update().then(function () {
                    identifierService.currentUser = userClone;
                    dfd.resolve();

                }, function (response){
                    dfd.reject(response.data.reason);
                }
            );
            return dfd.promise;


        },

        authenticateUser: function (email, password) {
            //debugger;
            var dfd = $q.defer();
            $http.post('/login', { email: email, password: password }).then(function (response){
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

        authRouteAcessFor:  function (role) {
            if(identifierService.isAuthorized(role)){
                return true;
            } else {
                return $q.reject('NOT_AUTHORIZED');
            }
        },

        authAuthenticatedUserForRoute: function () {
            if(identifierService.isAuthenticated()){
                return true;
            } else {
                return $q.reject('NOT_AUTHORIZED');
            }
        }

    }
});
