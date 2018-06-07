const mongoose = require('mongoose')
const SusIndividualSchema = require('../db/schemas/susIndividualSchema')
const commentSchema = require('../db/schemas/commentSchema')


const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment