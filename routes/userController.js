const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/', (req, res, next) => {
  res.send('yuh');
});

router.get('/new', (req, res) => {
  res.render('user/new')
})

router.post('/', (req, res) => {

})

router.get('/:id', (req, res) => {

})

router.get('/:id/edit', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;
