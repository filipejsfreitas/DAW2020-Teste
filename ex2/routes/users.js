const express = require('express');
const axios = require('axios').default;

const router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res) {
  res.render('login')
});

router.post('/login', (req, res) => {
  axios.post('http://clav-api.di.uminho.pt/v2/users/login', { username: req.body.username, password: req.body.password })
    .then(resp => {
      if(resp.status !== 200) {
        res.render('login-failed');
      } else {
        res.cookie('token', resp.data.token);
        res.render('login-success');
      }
    })
    .catch(error => res.status(500).render('login-failed'));
});

module.exports = router;
