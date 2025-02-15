const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    title: {
        type: String,
        required:[true, 'you must enter your title']
    },
    desc:{
        type: String
    },
    idUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    upVotes:{
        type: Array,
        default: []
    },
    downVotes:{
        type:Array,
        default: []
    }
})

const question = mongoose.model('Question', questionSchema)
module.exports = question