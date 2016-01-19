var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: function (str, path){
            return stylus(str).set('filename', path)
        }
    }
));

app.use(express.static(__dirname + '/public'));

if(env === 'development'){
    mongoose.connect('mongodb://localhost/meancourses');
}
else{
    mongoose.connect('mongodb://admin:meancourses@ds043605.mongolab.com:43605/mean-courses');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));

db.once('open', function callback() {
    console.log('meancourses db opened');
});



app.get('/partials/:partialPath', function (req, res) {
    res.render('partials/' + req.params.partialPath);
});

app.get('*', function (req,res) {
    res.render('index')
});




var port = process.env.PORT || 3030;
app.listen(port);

console.log('Listening on the port ' + port + '...')