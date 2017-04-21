var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookie = require('cookie');
var bodyParser = require('body-parser');

var app = express();

const ejs = require('ejs');
const viewRoot = path.join
(process.env._x_appRoot, 'views', process.env._x_website);

app.engine('ejs', function (filePath, options, callback) {
  return ejs.renderFile(
    filePath, 
    options, 
    { root: viewRoot, cache: true },
    callback
  );
});

// view engine setup
app.set('views', path.join(__dirname, 'views', process.env._x_website));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// Use simple cookie parser
app.use(function(req, res, next) {
  req.cookies = cookie.parse(req.headers.cookie || '');
  next();
});

// Create router
require('./routes/'+process.env._x_website)(app);

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