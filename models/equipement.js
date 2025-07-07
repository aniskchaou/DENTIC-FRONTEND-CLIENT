/* {
    "EquipmentMaintenance": {
      "id": "UUID",
      "clinicId": "UUID (Ref to Clinic)",
      "equipmentName": "string",
      "modelNumber": "string",
      "manufacturer": "string",
      "purchaseDate": "timestamp",
      "lastServiceDate": "timestamp",
      "nextServiceDue": "timestamp",
      "status": "Operational | Under Maintenance | Needs Replacement",
      "assignedTechnician": "UUID (Ref to Technician)",
      "maintenanceNotes": "string",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
   */

  var sequelize = require("../db/init.sequelize.js");
var Sequelize = require("sequelize");

var EquipmentMaintenance = sequelize.define("equipment_maintenance", {

  clinicId: {
    type: Sequelize.UUID,
    allowNull: false,
    // references: {
    //   model: "clinics", // Assuming clinics are stored in a table
    //   key: "id",
    // },
  },
  equipmentName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  modelNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  manufacturer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  purchaseDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  lastServiceDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  nextServiceDue: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  status: {
    type: Sequelize.ENUM("Operational", "Under Maintenance", "Needs Replacement"),
    allowNull: false,
    defaultValue: "Operational",
  },
  assignedTechnician: {
    type: Sequelize.UUID,
    allowNull: false,
    // references: {
    //   model: "technicians", // Assuming technicians are stored in a table
    //   key: "id",
    // },
  },
  maintenanceNotes: {
    type: Sequelize.TEXT,
    allowNull: true,
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

module.exports = EquipmentMaintenance;
