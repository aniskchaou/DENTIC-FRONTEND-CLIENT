
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Patient = sequelize.define('patient', {
    namepatient: Sequelize.STRING,
    emailpatient: Sequelize.STRING,
    birth: Sequelize.DATE,
    telephone: Sequelize.STRING,
    gender: Sequelize.STRING,
    address: Sequelize.STRING,
    bloodGroupe:Sequelize.STRING,
    Status:Sequelize.STRING,
    height:Sequelize.STRING,
    weight:Sequelize.STRING
});

module.exports = Patient;