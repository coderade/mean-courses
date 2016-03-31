meanApp.factory('userResource', function ($resource) {
    var usrResource = $resource('/api/users/:id', { _id: "@id" }, {
        update: { method: 'PUT', isArray: false }
    });

    usrResource.prototype.isAdmin = function () {
        return this.roles && this.roles.indexOf('admin') > -1;
    };

    return usrResource;
});