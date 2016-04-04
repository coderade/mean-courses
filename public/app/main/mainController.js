meanApp.controller('mainCtrl', function($scope, cachedCoursesResource){
    $scope.courses = cachedCoursesResource.query();
});