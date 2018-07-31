const express = require('express');
const router = express.Router();

/* GET profile page. */
router.get('/feed', (req, res) => {
  res.render('account/feed');
});

module.exports = router;
