

var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Income = sequelize.define('income', {
    name_income: Sequelize.STRING,
    amount: Sequelize.INTEGER,
    datee: Sequelize.DATE,
    note: Sequelize.STRING
});


module.exports = Income; 