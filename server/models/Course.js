"use strict";

var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: '{PATH} is required!'
    },
    featured: {
        type: Boolean,
        required: '{PATH} is required!'
    },
    published: {
        type: Date,
        required: '{PATH} is required!'
    },
    tags: [String]
});


var Course = mongoose.model('Course', courseSchema);


function createDefaultCourses(){
    Course.find({}).exec(function (err, collection) {
        if(collection.length === 0){
            Course.create({title: 'Why use NoSQL databases?', featured: true, published: new Date("02/20/2013"), tags:['databases', 'nosql', 'mongo']});
            Course.create({title: 'NodeJS for Java developers', featured: false, published: new Date("12/12/2015"), tags:['coding', 'java', 'nodejs']});
            Course.create({title: 'Java 8 What\'s new?', featured: false, published: new Date("1/12/2016"), tags:['Java', 'coding']});
            Course.create({title: 'Learn Python now', featured: true, published: new Date("1/4/2016"), tags:['coding', 'python']});
            Course.create({title: 'Ruby on rails with AngularJS', featured: true, published: new Date("12/18/2015"), tags:['rails', 'coding', 'angularjs']});
            Course.create({title: 'Using AngularJS with .NET', featured: false, published: new Date("12/22/2015"), tags:['dotnet', 'angularjs', 'coding']});
            Course.create({title: 'Caching with Redis', featured: true, published: new Date("01/31/2016"), tags:['caching', 'redis']});
            Course.create({title: 'Create your own map with the OpenStreetMap stack', featured: true, published: new Date("01/14/2016"), tags:['maps', 'osm']});
            Course.create({title: 'Using the framework CodeIgniter', featured: true, published: new Date("02/07/2016"), tags:['php', 'coding', 'codeigniter']});
            Course.create({title: 'Create your application with NodeJS', featured: true, published: new Date("08/29/2015"), tags:['nodejs', 'coding']});
            Course.create({title: 'Learning Python from scratch', featured: false, published: new Date("12/14/2016"), tags:['python', 'coding']});
        }
    })
}

exports.createDefaultCourses= createDefaultCourses;