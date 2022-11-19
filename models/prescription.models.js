var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Prescription = sequelize.define('prescription', {
    patient: Sequelize.STRING,
    pression: Sequelize.STRING,
    temperature: Sequelize.STRING,
    problem: Sequelize.STRING,
    note: Sequelize.STRING,

});




module.exports = Prescription; 