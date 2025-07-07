


/* var MedicamentCategory = sequelize.define('medicament_category', {
    name: Sequelize.STRING
});

{
    "MedicamentCategory": {
      "id": "UUID",
      "name": "string (e.g., Antibiotics, Painkillers, Anesthetics, Anti-inflammatory, Mouthwash)",
      "description": "string (Details about this category and its use cases)",
      "medicaments": [
        {
          "medicamentId": "UUID (Ref to Medicament)",
          "medicamentName": "string"
        }
      ],
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  } 
  
module.exports = MedicamentCategory;  */


var sequelize = require("../db/init.sequelize.js");
var { Sequelize, DataTypes } = require('sequelize');

const MedicamentCategory = sequelize.define("medicamentCategory", {

  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "e.g., Antibiotics, Painkillers, Anesthetics, Anti-inflammatory, Mouthwash"
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "Details about this category and its use cases"
  },
  // We'll use a JSONB column to store the array of medicaments
  medicaments: {
    type: DataTypes.JSONB,
    allowNull: true,
    comment: "List of medicaments under this category"
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = MedicamentCategory;
