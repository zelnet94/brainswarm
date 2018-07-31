// const passport = require('passport');
// const request = require('request');
// const { Strategy: LocalStrategy } = require('passport-local');


// const User = require('../models/User');
//
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });
//
// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

/**
 * Sign in using Email and Password.
 */
// passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//   User.findOne({ email: email.toLowerCase() }, (err, user) => {
//     if (err) { return done(err); }
//     if (!user) {
//       return done(null, false, { msg: `Email ${email} not found.` });
//     }
//     // When password is not correct
//     if (!user.authenticate(password)) return done(null, false);
//       return done(null, false, { msg: 'Invalid email or password.' });
//     });
// }));

// passport.use(new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
//     User.findOne({
//         email: email.toLowerCase() },
//         (err, user) => {
//         // This is how you handle error
//         if (err) return done(err);
//         // When user is not found
//         if (!user) return done(null, false);
//         // When password is not correct
//         if (!User.authenticate(password)) return done(null, false);
//         // When all things are good, we return the user
//         return done(null, user);
//      });
// }));


/**
 * Login Required middleware.
 */
// exports.isAuthenticated = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/login');
// };
