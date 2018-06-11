var express = require('express');
var router = express.Router({ mergeParams: true });
var Comment = require('../models/Comment')
var Suspect = require('../models/SusIndividual')
var User = require('../models/User')

router.get('/new', function(req, res, next) {
  const userId = req.params.userId
  const suspectId = req.params.suspectId
  const commentId = req.params.commentId
  User.findById(userId)
  .then((user) => {
    const susPerson = user.susPeopleList.id(suspectId)
      res.render('comment/new', {
        userId,
        suspectId,
        commentId,
        susPerson
      })
    })
    .catch((err) => {
      res.send(err)
    })
});

router.post('/', (req, res) => {
  const userId = req.params.userId
  const suspectId = req.params.suspectId
  const newSuspect = req.body
  User.findById(userId)
    .then((user) => {
      const susPerson = user.susPeopleList.id(suspectId)
      susPerson.susPeopleList.push(suspectId)

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
