var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Diagnostic = sequelize.define('diagnostic', {
//    patient: {  type: Sequelize.INTEGER,references: 'patients',  referencesKey: 'id' },
    heartRate: Sequelize.STRING,
    bloodPressure: Sequelize.STRING,
    temperature: Sequelize.STRING,
    oxygenSaturation: Sequelize.STRING,
    respiratoryRate : Sequelize.STRING,
      patient: {
            type: Sequelize.INTEGER,
            references: {
                model: 'patients',
                key: 'id'
            }
        }
});

module.exports = Diagnostic;