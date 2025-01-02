const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, unique: true, required:true},
    password: {type:String, required:true},
    userType: {type: String, enum: ["employee", "manager", "admin"], default: "employee"},
    entryDate: {type:String, default:Date.now}
})

const ideasSchema = new Schema({
    ideaTitle: {type:String, required:true},
    ideaDescription: {type:String, required:true},
    ideaTags: {type:String, required:true},
    ideaVotes: { type: Number, default: 0 },
    ideaRewards: {type:String},
    evaluationStatus: {type:String},
    entryDate: {type:String, default:Date.now}
})

const Users =  mongoose.model('Users', userSchema, 'users_table')
const Ideas =  mongoose.model('Ideas', ideasSchema, 'ideas_table')

const mySchemas = {'Users':Users, 'Ideas':Ideas}

module.exports = mySchemas