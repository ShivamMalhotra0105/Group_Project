// File Name : App.js
// Author Name : Shivam, Egecan, Lovedeep, Sukhpreet
// Website Name: Usurvey
// File Description: Npm Express Packages Javascript File 


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var bodyParser = require('body-parser');
var User = require('./models/user');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('flash');

//connection string mongodb
mongoose.connect('mongodb+srv://portfolio:portfolio@cluster0-eqeqx.mongodb.net/portfolio?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true}
 );

 var db = mongoose.connection;
 db.on('error', () => console.log("Error Connecting to mongo db"));
 db.once('open', () => console.log("Connected to MongoDB"));

// Three routers for the routes to work
var authRouter = require('./routes/auth')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: false}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Session use
app.use(session({ secret : 'bat', resave : false,saveUninitialized : true}));

//Flash use
app.use(flash());


//passport init
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.isLoggedIn = req.isAuthenticated();
  res.locals.user = req.user;

  if (req.isAuthenticated()) {
    res.locals.role = req.user.role;
  } else {
    res.locals.role = null;
  }

  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
