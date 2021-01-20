const express = require('express');
const router = express.Router();

const Batismos = require('../controllers/batismos.js');

router.get('/batismos', (req, res) => {
  let batismos;

  if(req.query.ano) {
    batismos = Batismos.getByYear(req.query.ano);
  } else {
    batismos = Batismos.list();
  }
  
  batismos
  .then(lista => res.status(200).jsonp(lista))
  .catch(error => res.status(500).jsonp({ error }));
});

router.get('/batismos/batisado', (req, res) => {
  Batismos.listBatisados()
  .then(batisados => res.status(200).jsonp(batisados))
  .catch(error => res.status(500).jsonp({ error }));
});

router.get('/batismos/progenitores', (req, res) => {
    Batismos.listProgenitores()
    .then(progenitores => res.status(200).jsonp(progenitores))
    .catch(error => res.status(500).jsonp({ error }));
});

router.get('/batismos/stats', (req, res) => {
    Batismos.stats()
    .then(stats => res.status(200).jsonp(stats))
    .catch(error => res.status(500).jsonp({ error }));
});

router.get('/batismos/:id', (req, res) => {
  Batismos.get(req.params.id)
  .then(batismo => res.status(200).jsonp(batismo))
  .catch(error => res.status(500).jsonp({ error }));
});

module.exports = router;
