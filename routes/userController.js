const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/', (req, res, next) => {
  const userId = req.params.id
  User.find()
    .then((user) => {
      console.log(user)
      res.render('user/index', {
        user,
        userId
      })
    })
    .catch((err) => {
      res.send(err)
    })
});

router.get('/new', (req, res) => {
  res.render('user/new')
})

router.post('/', (req, res) => {
  const createUser = req.body
  User.create(createUser)
    .then(() => {
      res.redirect('/user')
    })
    .catch((err) => {
      res.send(err)
    })
})

router.get('/:id', (req, res) => {
  const userId = req.params.id
  User.findById(userId)
    .then((user) => {
      res.render('user/show', {
        user,
        userId
      })
    })
    .catch((err) => {
      res.send(err)
    })
})

router.get('/:id/edit', (req, res) => {
  const userId = req.params.id
  User.findById(userId)
    .then((user) => {
      res.render('user/edit', {
        user
      })
    })
    .catch((err) => {
      res.send(err)
    })
})

router.put('/:id', (req, res) => {
  const userId = req.params.id
  const updatedUser = req.body
  User.findByIdAndUpdate(userId, updatedUser, { new: true })
    .then((user) => {
      res.render(`/user/${userId}`)
      user
    })
    .catch((err) => {
      res.send(err)
    })
})

module.exports = router;
