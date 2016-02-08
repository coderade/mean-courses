'use strict';

var path = require('path'),
    rootPath = path.normalize(__dirname + '/../../');

module.exports= {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/meancourses',
        port: process.env.PORT || 3030

    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://admin:meancourses@ds043605.mongolab.com:43605/mean-courses',
        port: process.env.PORT || 80
    }
};