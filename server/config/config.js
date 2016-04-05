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
        db: '',
        port: process.env.PORT || 80
    }
};