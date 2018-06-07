const mongoose = require('mongoose')
const SusIndividualSchema = require('../db/schemas/susIndividualSchema')
const commentSchema = require('../db/schemas/commentSchema')


const SusIndividual = mongoose.model('susIndividual', SusIndividualSchema)

module.exports = SusIndividual