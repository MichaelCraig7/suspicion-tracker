const Schema = require('mongoose').Schema
const commentSchema = require('./commentSchema')

const userSchema = new Schema({
    name: String,
    password: String,
    susPeopleList: [ susIndividualSchema ]
})