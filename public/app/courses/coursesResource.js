meanApp.factory('coursesResource', function ($resource) {
    var coursesRsc = $resource('/api/courses/:_id', {_id:'@id'}, {
        update: {method : 'PUT', isArray:false}
    });
    return coursesRsc;
});
