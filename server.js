var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'))

var db = mongojs('ecommerce', ['products']);



app.get('/api/products/:id', function(req, res) {
    var idObj = {
        _id: req.params.id
    };
    db.products.findOne(idObj, function(err, response) {
        if (err) res.status(500).json(err);
        else res.json(response);
    });
});

app.get('/api/products', function(req, res) {
    db.products.find(req.query, function(error, response) {
        if (error) return res.status(500).json(error);
        else return res.json(response);
    })
});

app.post('/api/products', function(req, res) {
    db.products.save(req.body, function(error, response) {
        if (error) return res.status(500).json(error);
        return res.json(response);
    });
});

app.put('/api/products/:id', function(req, res) {
    var newObj = {
        _id: mongojs.ObjectId(req.params.id)
    };
    db.products.update(newObj, req.body, function(error, response) {
        if (error) return res.status(500).json(error);
        else return res.json(response);
    })
});

app.delete('/api/products/:id', function(req, res) {
    var newObj = {
        _id: mongojs.ObjectId(req.params.id)
    };
    db.products.remove(newObj, function(error, response) {
        if (error) return res.status(500).json(error);
        else return res.json(response);
    });
});

var port = 3000;

app.listen(port, function() {
    console.log('you are now listening to port', port, 'hello master')
})
