var express = require('express');
var router = express.Router();

// Users new
router.get('/new', (req, res) => {
  res.render('users/new');
});

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
// var Amplify = require('aws-amplify');
// // const aws_exports = require ('./aws-exports');
// var Analytics = require ('@aws-amplify/analytics');
// var Auth = require('@aws-amplify/auth');
//
// Analytics.record('myCustomEvent');
//
// Auth.signUp({
//   username: 'Zelmundo94!',
//   password: 'Zelmundo94!',
//   attributes: {
//     email: 'dketter1@umbc.edu'
//   }
// });
//
// Amplify.configure({
//   Auth: {
//
//     //REQUIRED for Amazon Cognito region
//     Region: 'us-east-2',
//
//     //REQUIRED for Amazon Cognito User Pool ID
//     userPoolId: 'us-east-2_0dwMqDvQk',
//
//     //REQUIRED for Amazon Cognito Web Client ID (26-char alphanumeric)
//     userPoolWebClientId: '7kcab98dkrtpnb9daq6c2cl729',
//   }
// });
//
// Auth.signIn(username, password)
//   .then(success => console.log('successfully signed in!'))
//   .catch(err => console.log(err));



module.exports = router;
