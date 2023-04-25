const PersonCtrl = {};
const Person = require("../models/Person.models");

/**
 * Controller to create a person
 *
 * @param {object} req
 * @param {object} res
 * @returns Person created
 */
PersonCtrl.createPerson = async (req, res) => {
    const {
        identificationDocument,
        firstNamePerson,
        lastNamePerson,
        cityPerson,
        emailPerson,
        statusVaccine,
        doseApplied,
        nameCity,
    } = req.body;
    const newPerson = new Person({
        identificationDocument,
        firstNamePerson,
        lastNamePerson,
        cityPerson,
        emailPerson,
        statusVaccine,
        doseApplied,
        nameCity,
    });
    const documentValidate = await Person.findOne({
        identificationDocument: identificationDocument,
    });
    if (documentValidate) {
        res.json({ msg: "Document of person already registered" });
    } else {
        await newPerson.save();
        res.json({
            msg: "Person success created",
            id: newPerson._id,
            identificationDocument: newPerson.identificationDocument,
            firstNamePerson: newPerson.firstNamePerson,
            lastNamePerson: newPerson.lastNamePerson,
            cityPerson: newPerson.cityPerson,
            emailPerson: newPerson.emailPerson,
            statusVaccine: newPerson.statusVaccine,
            doseApplied: newPerson.doseApplied,
            nameCity: newPerson.nameCity,
        });
    }
};

/**
 * Controller to list all persons
 *
 * @param {object} req
 * @param {object} res
 * @returns List of persons
 */
PersonCtrl.listAllPersons = async (req, res) => {
    const response = await Person.find();
    if (response.length === 0) {
        res.json({ msg: "No persons registered" });
    } else {
        res.json(response);
    }
};

/**
 * Controller to list one person by id
 *
 * @param {object} req
 * @param {object} res
 * @returns One person listed by id
 */
PersonCtrl.listOnePersonById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Person.findById({ _id: id });
        res.json(response);
    } catch (error) {
        return res.status(400).json({ msg: `No persons registered by ID: ${id}` });
    }
};

/**
 * Controller to list persons by city
 *
 * @param {object} req
 * @param {object} res
 * @returns Person listed by city
 */
PersonCtrl.listPersonsByCity = async (req, res) => {
    const city = req.params.city;
    try {
        const response = await Person.find({ cityPerson: city });
        if (response.length === 0) {
            res.json({ msg: `No persons registered by CITY: ${city}` });
        } else {
            res.json(response);
        }
    } catch (error) {
        return res.status(400).json({
            msg: "An error has occurred",
            error,
        });
    }
};

/**
 * Controller to find persons by Status Vaccine
 *
 * @param {object} req
 * @param {object} res
 * @returns List Persons by Status Vaccine
 */
PersonCtrl.ListByStatusVaccine = async (req, res) => {
    const status = req.params.status;
    try {
        const response = await Person.find({ statusVaccine: status });
        if (response.length === 0) {
            res.json({ msg: `No persons registered by STATUS: ${status}` });
        } else {
            res.json(response);
        }
    } catch (error) {
        return res.status(400).json({
            msg: "An error has occurred",
            error,
        });
    }
};

/**
 * Controller to delete person
 *
 * @param {object} req
 * @param {object} res
 * @returns Person deleted
 */
PersonCtrl.deletePerson = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Person.findById({ _id: id });
        if (!response) {
            res.json({ msg: `No persons registered by CITY: ${city}` });
        } else {
            await Person.findByIdAndRemove({ _id: id });
            res.json({ msg: "Person success deleted" });
        }
    } catch (error) {
        return res.status(400).json({
            msg: "An error has occurred",
            error,
        });
    }
};

/**
 * Controller to update person
 *
 * @param {object} req
 * @param {object} res
 * @returns Person updated
 */
PersonCtrl.updatePerson = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Person.findById({ _id: id });
        if (!response) {
            res.json({ msg: `No persons registered by ID: ${id}` });
        } else {
            await Person.findByIdAndUpdate({ _id: id }, req.body);
            res.json({ msg: "Person success updated" });
        }
    } catch (error) {
        return res.status(400).json({
            msg: "An error has occurred",
            error,
        });
    }





    // const response = await Person.findByIdAndUpdate({ _id: id }, req.body);
    // res.json({
    //     msg: "Person success updated",
    // });
};

module.exports = PersonCtrl;
