var express = require('express');
var router = express.Router();
var Suspect = require('../models/SusIndividual')

router.get('/', function (req, res, next) {
  Suspect.find()
    .then((usersSuspectsMain) => {
      res.render('susIndividual/index', {
        usersSuspectsMain
      })
    })
    .catch((err) => {
      res.send(err)
    })
});

router.get('/new', (req, res) => {
  res.render('susIndividual/new')
})

router.post('/', (req, res) => {
  const newSuspect = req.body
  Suspect.create(newSuspect)
    .then(() => {
      res.redirect('/susPerson')
    })
})

router.get('/:id', (req, res) => {
  Suspect.findById(req.params.id)
    .then((suspiciousIndividual) => {
      res.render('susPerson/show'), {
        suspiciousIndividual
      }
    })
})

router.get('/:id/edit', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;
