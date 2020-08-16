const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PodcastSchema = new Schema({
    URL:{
        type: String,
        trim: true,
        required: true
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    createDate:{
        type: Date,
        required: true
    },
    listenerNumber: {
        type: Number,
        required: true
    },
    thumb:{
        type: String,
        trim: true,
        required: true
    }
})

const Podcasts = mongoose.model('podcast', PodcastSchema)

module.exports = Podcasts