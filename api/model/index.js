const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PodcastSchema = new Schema({
    podcastType:{
        type: String,
        trim: true,
        required: true
    },
    podcastURL:{
        type: String,
        trim: true,
        required: true
    },
    podcastTitle:{
        type: String,
        trim: true,
        required: true
    },
    podcastCreateDate:{
        type: Date,
        required: true
    },
    podcastListenerNumber: {
        type: Number,
        required: true
    },
    podcastThumb:{
        type: String,
        trim: true,
        required: true
    }
})

const Podcasts = mongoose.model('podcast', PodcastSchema)

module.exports = Podcasts