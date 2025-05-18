/* {
    "DentalImaging": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "doctorId": "UUID (Ref to Doctor)",
      "imageType": "X-ray | CT Scan | Intraoral Photo",
      "imageUrl": "string",
      "diagnosisNotes": "string",
      "uploadDate": "timestamp",
      "status": "Reviewed | Pending",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
   */

  var sequelize = require("../db/init.sequelize.js");
var Sequelize = require("sequelize");

var DentalImaging = sequelize.define("dental_imaging", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  patientId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "patients", // Assuming patients are stored in a table
      key: "id",
    },
  },
  doctorId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "users", // Assuming doctors are in the User table
      key: "id",
    },
  },
  imageType: {
    type: Sequelize.ENUM("X-ray", "CT Scan", "Intraoral Photo"),
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING, // URL of the uploaded image
    allowNull: false,
  },
  diagnosisNotes: {
    type: Sequelize.TEXT, // Doctor's diagnosis or comments
    allowNull: true,
  },
  uploadDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  status: {
    type: Sequelize.ENUM("Reviewed", "Pending"),
    allowNull: false,
    defaultValue: "Pending",
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

module.exports = DentalImaging;
