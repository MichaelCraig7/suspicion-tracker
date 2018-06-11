require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const userControllerRouter = require('./routes/userController');
const commentControllerRouter = require('./routes/commentController');
const susPersonControllerRouter = require('./routes/susPersonController');

const app = express();

mongoose.connect('mongodb://localhost/Project2')
  .then(() => {
    console.log('*** Mongo Connected ***')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

mongoose.connect('mongodb://localhost/Project2')
mongoose.connect(process.env.MONGODB_URI);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userControllerRouter);
app.use('/user/:userId/suspects', susPersonControllerRouter);
app.use('/user/:userId/suspects/:suspectId/comments', commentControllerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
