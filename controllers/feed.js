/**
 * GET /
 * News Feed page.
 */
exports.index = (req, res) => {
  res.render('feed', {
    title: 'News Feed'
  });
};

/** still need POST/ for updated statuses and notifications **/
