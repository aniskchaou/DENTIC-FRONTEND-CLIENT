
var sequelize = require("../db/init.sequelize.js");
//var Sequelize = require('sequelize');
/* 
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
{
    "Medicament": {
      "id": "UUID",
      "name": "string (e.g., Amoxicillin, Ibuprofen, Lidocaine)",
      "genericName": "string (Optional, generic alternative)",
      "category": "Antibiotic | Painkiller | Anesthetic | Anti-inflammatory | Mouthwash",
      "description": "string (Usage, precautions, side effects)",
      "activeIngredients": [
        {
          "ingredientName": "string",
          "concentration": "string (e.g., 500mg, 2%)"
        }
      ],
      "dosageForm": "Tablet | Capsule | Syrup | Injection | Gel | Spray",
      "strength": "string (e.g., 500mg, 2%)",
      "manufacturerId": "UUID (Ref to Manufacturer)",
      "requiresPrescription": "Yes | No",
      "sideEffects": ["Nausea", "Dizziness", "Allergy"],
      "contraindications": ["Pregnancy", "Kidney Disease", "Allergy to Penicillin"],
      "usageInstructions": "string (How to take/administer the medication)",
      "stockQuantity": "integer (Available stock in clinic/pharmacy)",
      "pricePerUnit": "float (Cost per unit)",
      "expirationDate": "timestamp",
      "storageConditions": "string (e.g., Store below 25°C, Keep away from sunlight)",
      "barcode": "string (Unique barcode for tracking)",
      "batchNumber": "string (Tracking batch for recalls)",
      "supplierId": "UUID (Ref to Supplier)",
      "status": "Available | Out of Stock | Expired | Discontinued",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  
module.exports = Medicament;
 */

const { Sequelize, DataTypes } = require("sequelize");
//const sequelize = require("../config/database");

const Medicament = sequelize.define("medicament", {

  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "e.g., Amoxicillin, Ibuprofen, Lidocaine"
  },
  genericName: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "Optional, generic alternative"
  },
  category: {
    type: DataTypes.ENUM("Antibiotic", "Painkiller", "Anesthetic", "Anti-inflammatory", "Mouthwash"),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "Usage, precautions, side effects"
  },
  activeIngredients: {
    type: DataTypes.JSONB,
    allowNull: true,
    comment: "List of active ingredients with concentration",
    get() {
      const value = this.getDataValue('activeIngredients');
      return value ? value : [];
    },
    set(value) {
      this.setDataValue('activeIngredients', value);
    }
  },
  dosageForm: {
    type: DataTypes.ENUM("Tablet", "Capsule", "Syrup", "Injection", "Gel", "Spray"),
    allowNull: false,
  },
  strength: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "e.g., 500mg, 2%"
  },
  manufacturerId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to Manufacturer",
  },
  requiresPrescription: {
    type: DataTypes.ENUM("Yes", "No"),
    allowNull: false,
  },
  sideEffects: {
    type: DataTypes.JSONB,
    allowNull: true,
    comment: "List of side effects like Nausea, Dizziness, Allergy",
    get() {
      const value = this.getDataValue('sideEffects');
      return value ? value : [];
    },
    set(value) {
      this.setDataValue('sideEffects', value);
    }
  },
  contraindications: {
    type: DataTypes.JSONB,
    allowNull: true,
    comment: "List of contraindications like Pregnancy, Kidney Disease, Allergy to Penicillin",
    get() {
      const value = this.getDataValue('contraindications');
      return value ? value : [];
    },
    set(value) {
      this.setDataValue('contraindications', value);
    }
  },
  usageInstructions: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "How to take/administer the medication"
  },
  stockQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: "Available stock in clinic/pharmacy"
  },
  pricePerUnit: {
    type: DataTypes.FLOAT,
    allowNull: false,
    comment: "Cost per unit"
  },
  expirationDate: {
    type: DataTypes.DATE,
    allowNull: true,
    comment: "Expiration date of the medication"
  },
  storageConditions: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "e.g., Store below 25°C, Keep away from sunlight"
  },
  barcode: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "Unique barcode for tracking"
  },
  batchNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "Tracking batch for recalls"
  },
  supplierId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to Supplier"
  },
  status: {
    type: DataTypes.ENUM("Available", "Out of Stock", "Expired", "Discontinued"),
    allowNull: false,
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

module.exports = Medicament;
