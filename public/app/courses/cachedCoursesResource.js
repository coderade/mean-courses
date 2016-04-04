meanApp.factory('cachedCoursesResource', function (coursesResource) {
    var courseList;

    return {
        query: function () {
            if(!courseList){
                courseList = coursesResource.query();
            }
            return courseList;
        }
    };

});
