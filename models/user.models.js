
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var User = sequelize.define('user', {
    username: Sequelize.STRING,
    pass: Sequelize.STRING
});


module.exports = User;