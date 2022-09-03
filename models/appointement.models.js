
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Appointement = sequelize.define('appointement', {
    datee: Sequelize.STRING,
    problem: Sequelize.STRING,
   patient: {
        type: Sequelize.INTEGER,
        references: {
            model: 'patients',
            key: 'id'
        }
    }
});


module.exports = Appointement;