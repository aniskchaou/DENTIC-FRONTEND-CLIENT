
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var ServiceItem = sequelize.define('service_item', {
    name:Squelize.STRING,
    description: Sequelize.STRING,
    status: Sequelize.STRING
});


module.exports = ServiceItem;