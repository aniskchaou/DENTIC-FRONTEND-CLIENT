/* {
    "Inventory": {
      "id": "UUID",
      "itemName": "string",
      "category": "Equipment | Medication | Tools | Consumables",
      "supplierId": "UUID (Ref to Supplier)",
      "stockQuantity": "integer",
      "reorderLevel": "integer",
      "unitPrice": "decimal",
      "totalStockValue": "decimal",
      "lastRestockedDate": "date",
      "expirationDate": "date (if applicable)",
      "autoReorderEnabled": "boolean",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  {
    "InventoryItem": {
      "id": "UUID",
      "clinicId": "UUID (Ref to Clinic)",
      "itemName": "string",
      "category": "Dental Tools | Medicines | PPE | Consumables",
      "quantityAvailable": "integer",
      "unit": "string (Box | Pack | Bottle | Piece)",
      "reorderThreshold": "integer",
      "supplierId": "UUID (Ref to Supplier)",
      "lastRestockedDate": "timestamp",
      "nextRestockDue": "timestamp",
      "status": "In Stock | Low Stock | Out of Stock",
      "autoReplenishment": "Enabled | Disabled",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  } */
  
var sequelize = require("../db/init.sequelize.js");
var { Sequelize, DataTypes } = require('sequelize');
  const Inventory = sequelize.define("inventory", {

    itemName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.ENUM("Equipment", "Medication", "Tools", "Consumables"),
      allowNull: false,
    },
    supplierId: {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: "suppliers",
        key: "id",
      },
    },
    stockQuantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    reorderLevel: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 10, // Minimum threshold to trigger reorder
    },
    unitPrice: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    totalStockValue: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    lastRestockedDate: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    expirationDate: {
      type: Sequelize.DATEONLY,
      allowNull: true, // Only applicable to medicines or perishable items
    },
    autoReorderEnabled: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  });
  
  module.exports = Inventory;

  
  const InventoryItem = sequelize.define("inventoryItem", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    clinicId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "clinics",
        key: "id",
      },
    },
    itemName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.ENUM("Dental Tools", "Medicines", "PPE", "Consumables"),
      allowNull: false,
    },
    quantityAvailable: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    unit: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Piece",
    },
    reorderThreshold: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 5,
    },
    supplierId: {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: "suppliers",
        key: "id",
      },
    },
    lastRestockedDate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    nextRestockDue: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    status: {
      type: Sequelize.ENUM("In Stock", "Low Stock", "Out of Stock"),
      allowNull: false,
      defaultValue: "In Stock",
    },
    autoReplenishment: {
      type: Sequelize.ENUM("Enabled", "Disabled"),
      defaultValue: "Disabled",
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  });
  
  module.exports = InventoryItem;
  