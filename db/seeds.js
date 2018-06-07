const mongoose = require('mongoose')
const User = require('../models/User')
const Comment = require('../models/Comment')
const SusIndividual = require('../models/SusIndividual')

mongoose.connect('mongodb://localhost/Project2')
    .then(() => {
        console.log('*** Mongo Connected ***')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })

User.remove()
    .then(() => {
        const comment1 = new Comment({
            createdBy: 'Dongo',
            content: 'I saw him out by Chipotle.  He was up to no good!',
        })
        const comment2 = new Comment({
            createdBy: 'Bib',
            content: 'Last night, she was cooking a pot roast.',
        })
        const susIndividual1 = new SusIndividual({
            name: 'Hank',
            img: 'url',
            offenses: 'This man stole my lunch!',
            suspicionLevel: 8,
            comments: [comment1]
        })
        const susIndividual2 = new SusIndividual({
            name: 'Pauline',
            img: 'url',
            offenses: 'She smells',
            suspicionLevel: 6,
            comments: [comment2]
        })
        const susIndividual3 = new SusIndividual({
            name: 'Courtney',
            img: 'url',
            offenses: 'I do not like Courtney',
            suspicionLevel: 3
        })
        const susIndividual4 = new SusIndividual({
            name: 'Warren',
            img: 'url',
            offenses: 'Something is fishy about this one',
            suspicionLevel: 8
        })
        const user1 = new User({
            name: 'XXNoScopesXX',
            password: 'password',
            susPeopleList: [susIndividual1]
        })
        const user2 = new User({
            name: 'Bump',
            password: 'pastwords',
            susPeopleList: [susIndividual2, susIndividual3]
        })
        const user3 = new User({
            name: 'MeanGene',
            password: 'pasta',
            susPeopleList: [susIndividual4]
        })

        const users = [user1, user2, user3]

        return User.insertMany(users)
    })
    .then(() => {
        mongoose.connection.close()
    })