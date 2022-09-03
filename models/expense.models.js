var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Expense = sequelize.define('expense', {
    name: Sequelize.STRING,
    amount: Sequelize.INTEGER,
    datee: Sequelize.DATE,
    note: Sequelize.STRING,
    paymentMode:Sequelize.STRING
});


module.exports = Expense;
