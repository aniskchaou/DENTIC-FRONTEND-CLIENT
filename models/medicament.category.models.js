
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var MedicamentCategory = sequelize.define('medicament_category', {
    name: Sequelize.STRING
});


module.exports = MedicamentCategory; 