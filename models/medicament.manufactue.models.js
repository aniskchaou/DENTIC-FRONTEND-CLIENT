
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var MedicamentManufacture = sequelize.define('medicament_manufacture', {
    name: Sequelize.STRING
});


module.exports = MedicamentManufacture; 