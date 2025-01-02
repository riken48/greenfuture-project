const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    entryDate: {type:String, default:Date.now}
})

const ideasSchema = new Schema({
    ideaTitle: {type:String, required:true},
    ideaDescription: {type:String, required:true},
    ideaTag: {type:String, required:true},
    ideaVote: {type:String, required:true},
    entryDate: {type:String, default:Date.now}
})

const Users =  mongoose.model('Users', userSchema, 'users_table')
const Ideas =  mongoose.model('Ideas', userSchema, 'ideas_table')

const mySchemas = {'Users':Users, 'Ideas':Ideas}

module.exports = mySchemas