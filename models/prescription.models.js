var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Prescription = sequelize.define('prescription', {
    patient: Sequelize.STRING,
    datee: Sequelize.DATE,
    medicament: Sequelize.STRING
});


module.exports = Prescription; 