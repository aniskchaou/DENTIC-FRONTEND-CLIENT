
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var ServicePage = sequelize.define('service_page', {
//    patient: {  type: Sequelize.INTEGER,references: 'patients',  referencesKey: 'id' },
    title: Sequelize.STRING,
    subTitle: Sequelize.STRING
});
module.exports = ServicePage;