const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if(req.cookies.token) {
    res.render('index');
  } else {
    res.redirect('/users/login');
  }
});

module.exports = router;
