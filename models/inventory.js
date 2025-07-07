/* {
    "InventoryItem": {
      "id": "UUID",
      "name": "string",
      "category": "Dental Tools | Medications | Consumables | Equipment",
      "quantity": "integer",
      "unit": "string (e.g., box, bottle, pack)",
      "supplierId": "UUID (Ref to Supplier)",
      "clinicId": "UUID (Ref to Clinic)",
      "reorderLevel": "integer (minimum stock threshold)",
      "expiryDate": "timestamp",
      "status": "In Stock | Low Stock | Out of Stock",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
   */

  var sequelize = require("../db/init.sequelize.js");
  var { Sequelize, DataTypes } = require('sequelize');

const InventoryItem = sequelize.define("inventoryItem", {

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM("Dental Tools", "Medications", "Consumables", "Equipment"),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "piece",
  },
  supplierId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: "suppliers",
      key: "id",
    },
  },
  clinicId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "clinics",
      key: "id",
    },
  },
  reorderLevel: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 5, // Minimum stock threshold before reordering
  },
  expiryDate: {
    type: DataTypes.DATE,
    allowNull: true, // Only applicable for medications/consumables
  },
  status: {
    type: DataTypes.ENUM("In Stock", "Low Stock", "Out of Stock"),
    allowNull: false,
    defaultValue: "In Stock",
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

module.exports = InventoryItem;
