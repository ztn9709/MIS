const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/StuInfo')
const stuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: Boolean
    },
    age: {
        type: Number
    },
    hobbies: {
        type: String
    }
})
const Stu = mongoose.model('Stu', stuSchema)

module.exports = Stu