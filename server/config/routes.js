'use strict';
var auth = require('./auth'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function(app) {
    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.get('/api/users', auth.requiresRole('admin'),
        function (req, res) {
            User.find({}).exec(function (err, collection) {
                res.send(collection);
            })
        }

    );

    app.post('/login', auth.authenticate);
    app.post('/logout', auth.logout);

    app.get('*', function(req, res){
        res.render('index', {
            currentUser: req.user
        })
    })

};
