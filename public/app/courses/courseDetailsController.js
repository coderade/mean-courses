meanApp.controller('courseDetailsController', function ($scope, cachedCoursesResource, $routeParams) {
    //$scope.course = cachedCoursesResource.get({_id: $routeParams.id})
    cachedCoursesResource.query().$promise.then(function (collection) {
        collection.forEach(function (course) {
            if(course._id === $routeParams.id){
                $scope.course = course;
            }
        })
    })
});
