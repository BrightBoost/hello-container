var express = require('express');
var app = express();


var port = process.env.PORT || 8080;
var message = "Hello container!";

app.get('/', function (req, res) {
    res.send(message)
});

app.listen(port, function () {
});