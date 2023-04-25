const mongoose = require('mongoose')
const Schema = mongoose.Schema  // Otra manera

const PersonsVaccinatedSchema = new Schema({
    identificationDocument: {
        type: String,
        required: [true, "Documento obligatorio"]
    },
    firstNamePerson: {
        type: String,
        required: [true, "Nombre obligatorio"]
    },
    lastNamePerson: {
        type: String,
        required: [true, "Nombre obligatorio"]
    },
    cityPerson: String,
    emailPerson: String,
    statusVaccine: String,
    doseApplied: String,
    nameCity: String,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Person', PersonsVaccinatedSchema)