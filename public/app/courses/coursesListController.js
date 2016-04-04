meanApp.controller('coursesListController', function ($scope, cachedCoursesResource) {
    $scope.courses = cachedCoursesResource.query();

    $scope.sortOptions = [
        { value: "title", text: "Sort by Title" },
        { value: "published", text: "Sort by Publish date "}
    ];

    $scope.sortOrder = $scope.sortOptions[0]

});
