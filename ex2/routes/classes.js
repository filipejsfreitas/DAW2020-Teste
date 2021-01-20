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
    axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&estrutura=lista&token=' + req.cookies.token)
    .then(resp => res.status(200).render('classes', { classes: resp.data }))
    .catch(error => res.status(500).render('error', { error }))
});

router.get('/:nivel1.:nivel2.:nivel3.:nivel4', (req, res) => {
    const className = [req.params.nivel1, req.params.nivel2, req.params.nivel3, req.params.nivel4].join('.');

    axios.get('http://clav-api.di.uminho.pt/v2/classes/c' + className + '?token=' + req.cookies.token)
    .then(resp => res.status(200).render('processo', { processo: resp.data }))
    .catch(error => res.status(500).render('error', { error }))
});

router.get('/:nivel1.:nivel2.:nivel3', (req, res) => {
    const className = [req.params.nivel1, req.params.nivel2, req.params.nivel3].join('.');

    axios.get('http://clav-api.di.uminho.pt/v2/classes/c' + className + '?token=' + req.cookies.token)
    .then(resp => res.status(200).render('processo', { processo: resp.data }))
    .catch(error => res.status(500).render('error', { error }))
});

router.get('/:nivel1.:nivel2', (req, res) => {
    const className = [req.params.nivel1, req.params.nivel2].join('.');

    axios.get('http://clav-api.di.uminho.pt/v2/classes/c' + className + '?token=' + req.cookies.token)
    .then(resp => res.status(200).render('classe', { classe: resp.data }))
    .catch(error => res.status(500).render('error', { error }))
});

router.get('/:nivel1', (req, res) => {
    axios.get('http://clav-api.di.uminho.pt/v2/classes/c' + req.params.nivel1 + '?token=' + req.cookies.token)
    .then(resp => res.status(200).render('classe', { classe: resp.data }))
    .catch(error => res.status(500).render('error', { error }))
});

module.exports = router;
