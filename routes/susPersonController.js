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
        userName: `${user.name}`,
        userId,
        suspects,
        susIndividual: user.susIndividual
      })
    })
    .catch((err) => {
      res.send(err)
    })
});

router.get('/new', (req, res) => {
  res.render('susIndividual/new', {
    userId: req.params.userId
  })
})

router.get('/:suspectId', (req, res) => {
  const userId = req.params.userId
  const suspectId = req.params.suspectId
  User.findById(userId)
    .then((user) => {
      const sus = user.susIndividual.id(suspectId)
      res.render('susIndividual/show'), {
        userId,
        sus
      }
    })
    .catch((err) => {
      res.send(err)
    })
})

router.post('/', (req, res) => {
  const userId = req.params.id
  const newSuspect = req.body
  User.findById(userId)
    .then((user) => {
      user.susPeopleList.push(newSuspect)
      return user.save()
    })
    .then(() => {
      console.log("userId")
      res.redirect(`/user/${userId}/suspects`)
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
