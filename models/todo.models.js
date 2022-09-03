var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var ToDo = sequelize.define('todo', {

    name: Sequelize.STRING,
    status: Sequelize.STRING,
      patient: {
            type: Sequelize.INTEGER,
            references: {
                model: 'patients',
                key: 'id'
            }
        }
    // patientId: {  type: Sequelize.INTEGER,references: 'patients',  referencesKey: 'id' }
});


module.exports = ToDo; 