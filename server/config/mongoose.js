'use strict';

var mongoose = require('mongoose');

module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));

    db.once('open', function callback() {
        console.log('meancourses db opened');
    });

    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String
    });

    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function (err, collection) {
        if(collection.length == 0){
            User.create({
                firstName: 'Valdeci',
                lastName: 'Gomes',
                username: 'coderade'
            });
            User.create({
                firstName: 'Ellon',
                lastName: 'Musk',
                username: 'ellon'
            });
            User.create({
                firstName: 'Bill',
                lastName: 'Gates',
                username: 'bill'
            })
        }
    })
};
