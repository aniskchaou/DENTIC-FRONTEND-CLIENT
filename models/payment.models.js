var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Payment = sequelize.define('payment', {
    invoiceNumber: Sequelize.STRING,
    paymentDate: Sequelize.STRING,
    paymenMode: Sequelize.STRING,
    amountReceived: Sequelize.STRING,
    invoiceBlanceDue: Sequelize.STRING,
    patient: Sequelize.STRING
});


module.exports = Payment;