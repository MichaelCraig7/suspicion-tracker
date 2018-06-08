var express = require('express');
var router = express.Router();
var Suspect = require('../models/SusIndividual')
var User = require('../models/User')

router.get('/', function (req, res, next) {
  const UserId = req.params.userID
  User.find()
    .then((usersSuspectsMain) => {
      const suspects = user.suspects
      res.render('suspects/index', {
        suspects
      })
    })
    .catch((err) => {
      res.send(err)
    })
});

router.get('/new', (req, res) => {
  res.render('susIndividual/new')
    .catch((err) => {
      res.send(err)
    })
})

router.post('/', (req, res) => {
  const newSuspect = new newSuspect(req.body)
  Suspect.findById(req.params.susPersonId)
    .then(() => {
      res.redirect('/susPerson')
    })
    .catch((err) => {
      res.send(err)
    })
})

router.get('/:id', (req, res) => {
  Suspect.findById(req.params.id)
    .then((suspiciousIndividual) => {
      res.render('susIndividual/show'), {
        suspiciousIndividual
      }
    })
    .catch((err) => {
      res.send(err)
    })
})

router.get('/:id/edit', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;
