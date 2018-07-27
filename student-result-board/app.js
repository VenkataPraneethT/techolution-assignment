var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var studentsDashboard = require('./routes/studentsDataAPI');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static( './dist'));
// app.use('*', express.static(path.join(__dirname, 'dist/index.html')));
// var engines = require('consolidate');

// app.engine('html', engines.mustache);
// app.set('view engine', 'html');
// app.set('views', 'dist');

app.use('/students', studentsDashboard);

app.route('/*').get(function(req, res) {
    return res.sendFile(__dirname + '/dist/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
