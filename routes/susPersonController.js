var express = require('express');
var router = express.Router({ mergeParams: true });
var Suspect = require('../models/SusIndividual')
var User = require('../models/User')

router.get('/', function (req, res, next) {
  const userId = req.params.userId
  User.findById(userId)
    .then((user) => {
      const suspects = user.suspects
      res.render('susIndividual/index', {
        suspects
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
  const userId = req.params.userId
  const newSuspect = new newSuspect(req.body)
  Suspect.findById(req.params.userId)
    .then(() => {
      res.redirect('/susIndividual')
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
