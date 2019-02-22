var express = require('express');
var app = express();
var apiController = require('./controllers/apicontroller.js');
var htmlController = require('./controllers/htmlcontroller.js');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://test:test@ca-dev-01-1un6l.mongodb.net/addressbook?retryWrites=true');
var Schema = mongoose.Schema;
var personSchema = new Schema({firstname: String, lastname: String, address: String});
var Person = mongoose.model('Person', personSchema);
var john = Person({firstname: 'John', lastname: 'Doe', address: '555 Main Street'});
john.save(function(err) {
    if (err) throw err;
    console.log('person saved!');
});

var jane = Person({firstname: 'Jane', lastname: 'Doe', address: '555 Main Street'});
jane.save(function(err) {
    if (err) throw err;
    console.log('person saved!');
});

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);

    Person.find({}, function(err, users) {
        if (err) throw err;
        console.log(users);
    })
    
    next();
});

htmlController(app);

apiController(app);

app.listen(port);