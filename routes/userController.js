const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/', (req, res, next) => {
  res.send('yuh');
});

module.exports = router;
