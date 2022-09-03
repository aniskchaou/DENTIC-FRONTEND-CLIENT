

var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Invoice = sequelize.define('invoice', {
    client: Sequelize.STRING,
    date: Sequelize.STRING,
    note: Sequelize.STRING,
    status:Sequelize.STRING
});

//Invoice	Amount	Tax	Date	Customer	Status
module.exports = Invoice;