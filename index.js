var express = require('express'); 
var ejs = require('ejs');
var fs = require('fs');

var app = express();

var port = 8000;

//get, put, post, delete
app.get('/', function(request, response){

    response.sendFile(__dirname + '/index.html')

});

app.get('/products', function(req, res){
    fs.readFile('products.json', 'utf8', function(err, data){
        var products = JSON.parse(data);
        res.locals = { products: products };
        res.render('products.ejs');

    });
});

app.listen(port);
console.log('Server listening on http://localhost:'+port+' !');