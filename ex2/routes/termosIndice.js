const express = require('express');
const axios = require('axios').default;

const router = express.Router();

function loggedIn(req, res, next) {
    if(req.cookies.token) {
        next();
        return;
    } else {
        res.redirect('/users/login');
    }
}

router.use(loggedIn); // All routes in this file are protected by a login

router.get('/', (req, res) => {
    axios.get('http://clav-api.di.uminho.pt/v2/termosIndice?token=' + req.cookies.token)
    .then(resp => res.status(200).render('termosIndice', { termos: resp.data }))
    .catch(error => res.status(500).render('error', { error }))
});

module.exports = router;
