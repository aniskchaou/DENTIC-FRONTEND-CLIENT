
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Consultation = sequelize.define('consultation', {
    instructiondate: Sequelize.STRING,
    applieddate: Sequelize.STRING,
//     patient: {  type: Sequelize.INTEGER,references: 'patients',  referencesKey: 'id' },
    instruction: Sequelize.STRING,
    description: Sequelize.STRING,
      patient: {
            type: Sequelize.INTEGER,
            references: {
                model: 'patients',
                key: 'id'
            }
        }
});

module.exports = Consultation;