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
      console.log(suspects)
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

router.get('/:suspectId/show', (req, res) => {
  const userId = req.params.userId
  const suspectId = req.params.suspectId
  User.findById(userId)
    .then((user) => {
      const susPerson = user.susPeopleList.id(suspectId)
      res.render('susIndividual/show', {
        susPerson,
        userId,
        suspectId,
      })
    })
    .catch((err) => {
      res.send(err)
    })
})

router.get('/:suspectId/edit', (req, res) => {
  const userId = req.params.userId
  const suspectId = req.params.suspectId
  User.findById(userId)
    .then((user) => {
      const susPerson = user.susPeopleList.id(suspectId)
      res.render('susIndividual/edit', {
        susPerson,
        userId
      })
    })
    .catch((err) => {
      res.send(err)
    })
})

router.put('/:suspectId', (req, res) => {
  const userId = req.params.userId
  const suspectId = req.params.suspectId
  const updatedSuspect = req.body
  User.findById(userId, updatedSuspect, { new: true })
    .then((user) => {
      user.susPeopleList.id(suspectId)
      return user.save()
    })
    .then(() => {
      res.render(`/user/${userId}/suspects`)
    })
    .catch((err) => {
      res.send(err)
    })
})

router.delete('/:suspectId', (req, res) => {
  const userId = req.params.userId
  const suspectId = req.params.suspectId
  User.findById(userId)
    .then((user) => {
      user.susPeopleList.id(suspectId).remove()
      return user.save()
    })
    .then(() => {
      res.redirect(`/user/${userId}/suspects`)
    })
    .catch((err) => {
      res.send(err)
    })
})

module.exports = router;
