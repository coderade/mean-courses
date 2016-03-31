'use strict';
var auth = require('./auth'),
    users = require('../controllers/users.js');
module.exports = function(app) {
    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
    app.post('/api/users', users.createUser);
    app.put('/api/users', users.updateUser);

    app.post('/login', auth.authenticate);
    app.post('/logout', auth.logout);

    app.get('*', function(req, res){
        res.render('index', {
            currentUser: req.user
        })
    })

};
