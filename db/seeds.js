const mongoose = require('mongoose')
const User = require('../models/User')
const Comment = require('../models/Comment')

mongoose.connect('mongodb://localhost/Project2')
    .then(() => {
        console.log('*** Mongo Connected ***')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })

