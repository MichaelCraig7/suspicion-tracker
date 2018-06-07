const Schema = require('mongoose').Schema
const susIndividualSchema = require('./susIndividualSchema')

const userSchema = new Schema({
    name: String,
    password: String,
    susPeopleList: [ susIndividualSchema ]
})

module.exports = userSchema