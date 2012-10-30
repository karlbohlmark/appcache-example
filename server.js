var express = require('express');
var fs = require('fs');
var app = express();

app.use( function (req, res, next) {
	console.log('request: '+ req.url);
	next()
});

app.get('/', function (req, res) {
	res.sendfile('index.html');
})

app.get('/kitten.jpeg', function (req, res) {
	res.sendfile('kitten.jpeg');
})

app.get('/api/people', function (req, res) {
	res.json( fs.readFileSync('./people.json'));
});

app.get('/manifest.appcache', function (req, res) {
	res.sendfile('manifest.appcache');
});

['main.css', 'extra.css', 'app.js', 'index.html', 'favicon.ico'].forEach( function (file) {
	app.get('/' + file, function (req, res) {
		res.sendfile(file);
	});
})

app.listen(4000)
console.log('server listening on port: ' + 4000);