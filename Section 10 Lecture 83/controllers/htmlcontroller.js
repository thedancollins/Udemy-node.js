var bodyParser = require('body-parser');
var url_encoded = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index');
    });
    
    app.get('/api', function(req, res) {
        res.json({ firstname: 'John', lastname: 'Doe'});
    });
    
    app.post('/personjson', function(req, res) {
        res.send('Thank you for the JSON data');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
    
    app.post('/person/', url_encoded, function (req, res) {
        res.send('Thank you');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
    
    app.get('/person/:id', function (req, res) {
        res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
    });
}