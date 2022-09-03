
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Medicament = sequelize.define('medicament', {
    name: Sequelize.STRING,
    producer: {
        type: Sequelize.INTEGER,
        references: {
            model: 'medicament_manufactures',
            key: 'id'
        }
    },

    description: Sequelize.STRING,

    group: {
        type: Sequelize.INTEGER,
        references: {
            model: 'medicament_categories',
            key: 'id'
        }


    }
});

module.exports = Medicament;
