const mongoose = require('mongoose')
const {Schema} = mongoose

const CitySchema = new Schema({
    nameCity: String,
    emailCity: String,
    password: String,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('City', CitySchema)