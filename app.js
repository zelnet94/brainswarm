var createError = require('http-errors');
const express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const logger = require('morgan');
const chalk = require('chalk');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const bodyParser = require('body-parser');
const sass = require('node-sass-middleware');
// const passport = require('passport');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var feedRouter = require('./routes/feed');

const app = express();

/**
 * Connect to MongoDB.
 */
 mongoose.connect('mongodb://zelmundo7:zelmundo7@ds255451.mlab.com:55451/brainswarm-db', {
    useNewUrlParser: true
 });
 mongoose.Promise = global.Promise;
 const db = mongoose.connection

 db.on('error', (err) => {
   console.error(err);
   console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
   process.exit();
 });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/** sass configuration **/

app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));

/**body-parser configuration**/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** validator configuration **/

app.use(expressValidator());

app.use(session({
    secret: 'my-secret',
    resave: true,
    cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: db,
      autoReconnect: true
    })
}));

/** passport configuration **/
// app.use(passport.initialize());
// app.use(passport.session());

/** flash configuration **/
app.use(flash());

/**routes **/

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/feed', feedRouter);


// app.use((req, res, next) => {
//   //After successful login, redirect back to the intended page
//   if (!req.user &&
//     req.path !== '/login' &&
//     req.path !== '/signup' &&
//     !req.path.match(/^\/auth/) &&
//     !req.path.match(/\./)) {
//     req.session.returnTo = req.originalUrl;
//   } else if (req.user &&
//     (req.path === '/account' || req.path.match(/^\/api/))) {
//     req.session.returnTo = req.originalUrl;
//   }
//   next();
// });

/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');
const userController = require('./controllers/user');
const contactController = require('./controllers/contact');
const feedController = require('./controllers/feed');


/**
 * API keys and Passport configuration.
 */
// const passportConfig = require('./config/passport');

/**static file paths **/
app.use('/javascripts/lib', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'), { maxAge: 31557600000 }));
app.use('/javascripts/lib', express.static(path.join(__dirname, 'node_modules/jquery/dist'), { maxAge: 31557600000 }));
app.use('/javascripts/lib', express.static(path.join(__dirname, 'node_modules/popper.js/dist'), { maxAge: 31557600000 }));
app.use('/webfonts', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts'), { maxAge: 31557600000 }));

//primary app routes.
app.get('/login', userController.getLogin);
app.post('/login', userController.postLogin);
app.get('/logout', userController.logout);
app.get('/signup', userController.getSignup);
app.post('/signup', userController.postSignup);
// app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
// app.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
// app.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);



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
