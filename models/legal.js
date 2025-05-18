/* {
    "LegalCompliance": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "documentType": "Consent Form | GDPR Agreement | HIPAA Agreement",
      "documentUrl": "string (PDF URL)",
      "signedDate": "timestamp",
      "expiryDate": "timestamp (if applicable)",
      "status": "Signed | Pending | Expired",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
   */

  var sequelize = require("../db/init.sequelize.js");
  var { Sequelize, DataTypes } = require('sequelize');

const LegalCompliance = sequelize.define("legalCompliance", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "patients",
      key: "id",
    },
  },
  documentType: {
    type: DataTypes.ENUM("Consent Form", "GDPR Agreement", "HIPAA Agreement"),
    allowNull: false,
  },
  documentUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  signedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  expiryDate: {
    type: DataTypes.DATE,
    allowNull: true, // Expiry may not be applicable for all documents
  },
  status: {
    type: DataTypes.ENUM("Signed", "Pending", "Expired"),
    allowNull: false,
    defaultValue: "Pending",
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

module.exports = LegalCompliance;
