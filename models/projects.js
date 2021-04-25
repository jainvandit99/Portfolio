const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    brief: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    projectLink: {
        type: String,
        required: true,
        default: ""
    },
    isPinned: {
        type: Boolean,
        required: true,
        default: false
    },
    color: String,
    year: String,
    links: {
        type: [{
            text: {type: String, required: true},
            href: {type: String, required: true, default: ""}
        }],
        required: false
    }
})

module.exports = mongoose.model('Project', ProjectSchema, 'Projects')