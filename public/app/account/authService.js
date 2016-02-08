meanApp.factory('authService', function ($http, identifierService, $q) {
    return{
        authenticateUser: function (username, password) {
            //debugger;
            var dfd = $q.defer();
            $http.post('/login', { username: username, password: password }).then(function (response){
                if(response.data.success){
                    identifierService.currentUser = response.data.user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }

            });
            return dfd.promise;
        }
    }
});
