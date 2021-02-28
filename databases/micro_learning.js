const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const microLearningSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false,
        default: 0
    },
    duration: {
        type: String,
        required: false,
        default: null
    },
    author_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    img_thumb: {
        type: String,
        required: false,
        default: null
    },
    description: {
        type: String,
        required: true
    },
    what_would_you_do: {
        type: String,
        required: false,
        default: null
    },
    video: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Video'
        }
    ],
    like: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    unlike: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    free_course: {
        type: Boolean,
        required: false,
        default: 0
    },
    is_active: {
        type: Boolean,
        required: false,
        default: 0
    },
}, { timestamps: true })

module.exports = mongoose.model('Micro_Learning',microLearningSchema)