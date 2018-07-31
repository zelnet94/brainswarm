const express = require('express');
const router = express.Router();

const authCheck = (req, res, next) => {
  if(!req,user) {
    res.redirect('account/profile');
  } else {
    next();
  }
};

/* GET profile page. */
router.get('/', authCheck, (req, res) => {
  res.render('account/profile', { user: req.user });
});

module.exports = router;
