var express = require('express');
var router = express.Router({ mergeParams: true });
var Suspect = require('../models/SusIndividual')
var User = require('../models/User')

router.get('/', function (req, res, next) {
  const userId = req.params.userId
  const suspectId = req.params.suspectId
  User.findById(userId)
    .then((user) => {
      const suspects = user.susPeopleList
      res.render('susIndividual/index', {
        userName: `${user.name}`,
        userId,
        suspectId,
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
      const suspects = user.susPeopleList
      const susPerson = user.susPeopleList.id(suspectId)
      res.render('susIndividual/show', {
        userId,
        susPerson,
        suspects
      })
    })
    .catch((err) => {
      res.send(err)
    })
})

router.post('/', (req, res) => {
  const userId = req.params.userId
  const newSuspect = req.body
  User.findById(userId)
    .then((user) => {
      user.susPeopleList.push(newSuspect)
      return user.save()
    })
    .then(() => {
      res.redirect(`/user/${userId}/suspects`)
    })
    .catch((err) => {
      res.send(err)
    })
})

router.get('/:suspectId/edit', (req, res) => {
  const userId = req.params.userId

})

router.put('/:suspectId', (req, res) => {

})

router.delete('/suspectId', (req, res) => {

})

module.exports = router;
