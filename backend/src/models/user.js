const { Schema, model } = require('mongoose')

const userShema = new Schema({
    name: String,
    email: String,
    position: String,
    phone: String,
    password: String,
    passwordCheck: String
},
{    
    timestamps:true
    })
module.exports =model('user', userShema)