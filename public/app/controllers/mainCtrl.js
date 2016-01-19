angular.module('app').controller('mainCtrl', function($scope){
    $scope.courses = [
        {name: "NodeJS course for Java developers", featured: true, published: new Date("12/12/2015")},
        {name: "Java 8 What's new?", featured: false, published: new Date("1/12/2016")},
        {name: "Learn Python now", featured: true, published: new Date("1/4/2016")},
        {name: "Ruby on rails for men", featured: true, published: new Date("12/18/2015")},
        {name: "Teach your dog to code in C#", featured: false, published: new Date("12/22/2015")},
        {name: "Why .Net is not good", featured: true, published: new Date("1/2016")}

    ];
    debugger;
});