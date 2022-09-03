var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Certificate = sequelize.define('certificate', {
//    patient: {  type: Sequelize.INTEGER,references: 'patients',  referencesKey: 'id' },
    date: Sequelize.STRING,
    template: Sequelize.STRING,
    content: Sequelize.STRING,
      patient: {
            type: Sequelize.INTEGER,
            references: {
                model: 'patients',
                key: 'id'
            }
        }
});
module.exports = Certificate;