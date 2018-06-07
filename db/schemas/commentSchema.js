const Schema = require('mongoose').Schema

const commentSchema = new Schema ({
    createdBy: String,
    content: String,
    timeWritten: Date
})

module.exports = commentSchema