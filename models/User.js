const mongoose = require('mongoose')
const userSchema = require('../db/schemas/userSchema')
const SusIndividualSchema = require('../db/schemas/susIndividualSchema')


const User = mongoose.model('user', userSchema)

module.exports = User