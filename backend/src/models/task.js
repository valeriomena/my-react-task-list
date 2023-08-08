const { Schema, model } = require('mongoose')

const taskShema = new Schema({
    doneTask: Boolean,
    name: String,
    descript: String,
    date: String,
    hour: String,
    email: String,
    responsible: String
},
{    
    timestamps:true
})

module.exports = model('task', taskShema)
