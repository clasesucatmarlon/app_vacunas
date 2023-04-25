const CityCtrl = {};
const City = require("../models/City.models");
const bcrypt = require("bcryptjs");
const { json } = require("body-parser");
const jwt = require("jsonwebtoken");

CityCtrl.createCity = async (req, res) => {
    const { nameCity, emailCity, password } = req.body;
    const newCity = new City({
        nameCity,
        emailCity,
        password,
    });
    const emailCityValidate = await City.findOne({ emailCity: emailCity });
    if (emailCityValidate) {
        res.json({ msg: "Mail already registered" });
    } else {
        newCity.password = await bcrypt.hash(password, 10);
        const token = jwt.sign({ _id: newCity._id }, "Secret");
        await newCity.save();
        res.json({
            msg: "City success created",
            id: newCity._id,
            nameCity: newCity.nameCity,
            token,
        });
    }
};


CityCtrl.login = async (req, res) => {
    const { emailCity, password } = req.body;
    const emailCityValidate = await City.findOne({ emailCity: emailCity });
    if (!emailCityValidate) {
        return res.json({
            msg: "UPS!!!! Incorrect mail"
        });
    } 
    const match = await bcrypt.compare(password, emailCityValidate.password)
    if (match) {
        const token = jwt.sign({ _id: emailCityValidate._id }, "Secret");
        res.json({
            msg: "Welcome !!!",
            id: emailCityValidate.id,
            nameCity: emailCityValidate.nameCity,
            token,
        });
    } else {
        res.json({
            msg: "UPS!!!! Incorrect password!!!"
        });
    }
};

module.exports = CityCtrl;
