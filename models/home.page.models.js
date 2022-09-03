var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var HomePage = sequelize.define('home_page', {
    subTitle: Sequelize.STRING,
    mainTitle: Sequelize.STRING,
    description: Sequelize.STRING
});


module.exports = HomePage;
