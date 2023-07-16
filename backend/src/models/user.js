const { Schema, model } = require('mongoose')

const userShema = new Schema({
    id: String,
    name: String,
    email: String,
    password: String,
    passwordCheck: String
},
{    
    timestamps:true
    })
module.exports =model('user', userShema)