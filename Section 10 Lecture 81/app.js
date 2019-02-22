var express = require('express');
var app = express();
var apiController = require('./controllers/apicontroller.js');
var htmlController = require('./controllers/htmlcontroller.js');
var port = process.env.PORT || 3000;
var mysql = require('mysql');

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);

    var con = mysql.createConnection({
        host: "localhost",
        user: "test",
        password: "test",
        database: "Person"
        });
    
        con.query('select P.ID PeopleID, P.FirstName, P.LastName, A.Address ' +
                    'from Person.People as P inner join Person.PersonAddresses as PA on PA.PersonId = P.ID ' +
                    ' inner join Person.Addresses as A on A.ID = PA.AddressID', function(err, rows){
                        if (err) throw err;
                        console.log(rows[0].FirstName);
                    });

    next();
});

htmlController(app);

apiController(app);

app.listen(port);