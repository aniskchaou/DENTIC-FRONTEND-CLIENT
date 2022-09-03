var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var BlogPage = sequelize.define('certificate', {
//    patient: {  type: Sequelize.INTEGER,references: 'patients',  referencesKey: 'id' },
    email: Sequelize.STRING,
    subject: Sequelize.STRING,
    message: Sequelize.STRING,
    sendButton: Sequelize.STRING,
    name: Sequelize.STRING,
});
module.exports = BlogPage;