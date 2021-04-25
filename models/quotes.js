const mongoose = require('mongoose')
const Schema = mongoose.Schema

let QuotesSchema = new Schema({
    quote: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Quote', QuotesSchema)