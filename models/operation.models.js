var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Operation = sequelize.define('operation', {
//    patient: {  type: Sequelize.INTEGER,references: 'patients',  referencesKey: 'id' },
  patient: {
        type: Sequelize.INTEGER,
        references: {
            model: 'patients',
            key: 'id'
        }
    },
    name:Squelize.STRING,
    description: Sequelize.STRING,
    status: Sequelize.STRING
});


module.exports = Operation;