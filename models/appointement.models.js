
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Appointement = sequelize.define('appointement', {
    birthdate: Sequelize.STRING,
    message: Sequelize.STRING,
    patient: Sequelize.STRING,
    telephone: Sequelize.STRING,
    datee: Sequelize.STRING,
    email: Sequelize.STRING
});


module.exports = Appointement;