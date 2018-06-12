const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/', (req, res, next) => {
  User.find()
    .then((users) => {
      console.log('index')
      const userId = users[0]._id
      res.render('user/index', {userId})
    })
    .catch((err) => {
      res.send(err)
    })
});

router.get('/new', (req, res) => {
  res.render('user/new')
})

// router.post('/', (req, res) => {
//   const createUser = req.body
//   console.log('here it is')
//   User.create(createUser)
//     .then(() => {
//       res.redirect(`/user/${userId}`)
//     })
//     .catch((err) => {
//       res.send(err)
//     })
// })

router.get('/:id', (req, res) => {
  const userId = req.params.id
  User.findById(userId)
    .then((user) => {
      console.log('SHOW FUNCRTION')
      res.render('user/show', {
        user,
        userId
      })
    })
    .catch((err) => {
      res.send(err)
    })
})

// router.get('/:id/edit', (req, res) => {
//   const userId = req.params.id
//   User.findById(userId)
//     .then((user) => {
//       res.render('user/edit', {
//         user
//       })
//     })
//     .catch((err) => {
//       res.send(err)
//     })
// })

// router.put('/:id', (req, res) => {
//   const userId = req.params.id
//   const updatedUser = req.body
//   console.log('DING DONG')
//   User.findByIdAndUpdate(userId, updatedUser, { new: true })
//     .then((user) => {
//       res.redirect(`/user/${userId}`)
//     })
//     .catch((err) => {
//       res.send(err)
//     })
// })

module.exports = router;
