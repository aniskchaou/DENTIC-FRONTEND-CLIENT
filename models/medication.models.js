
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Medication = sequelize.define('medication', {
   //patient: {  type: Sequelize.INTEGER,references: 'patients',  referencesKey: 'id' },
    medecineName: Sequelize.STRING,
    dose: Sequelize.STRING,
    date: Sequelize.STRING,
    note: Sequelize.STRING,
      Sequelize: {
            type: DataTypes.INTEGER,
            references: {
                model: 'patients',
                key: 'id'
            }
        }
});

module.exports = Medication;