var express = require('express');
var bodyParser = require('body-parser');
var walbot = require('./app/walbot');
var app = express();
var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/walbot', walbot);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('Slack bot listening on port ' + port);
});
