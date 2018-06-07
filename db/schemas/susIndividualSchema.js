const Schema = require('mongoose').Schema
const commentSchema = require('./commentSchema')


const susIndividualSchema = new Schema ({
    name: String,
    img: String,
    offenses: String,
    timeCreated: Date,
    suspicionLevel: Number,
    comments: [ commentSchema ]
})

module.exports = susIndividualSchema