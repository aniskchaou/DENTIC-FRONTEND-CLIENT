
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var LabTest = sequelize.define('labtest', {
    datee: Sequelize.STRING,
    patient: Sequelize.STRING,
    content: Sequelize.STRING,
    status:Sequelize.STRING
});

module.exports = LabTest; 