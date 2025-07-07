/* {
    "Insurance": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "providerName": "string",
      "policyNumber": "string",
      "coverageDetails": {
        "consultationCoverage": "percentage",
        "treatmentCoverage": "percentage",
        "medicationCoverage": "percentage",
        "maxAnnualCoverage": "decimal"
      },
      "validFrom": "date",
      "validUntil": "date",
      "status": "Active | Expired | Pending Verification",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
   */

  var sequelize = require("../db/init.sequelize.js");
  var { Sequelize, DataTypes } = require('sequelize');
  const Insurance = sequelize.define("insurance", {

    patientId: {
      type: Sequelize.UUID,
      allowNull: false,
      // references: {
      //   model: "patients",
      //   key: "id",
      // },
    },
    providerName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    policyNumber: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    coverageDetails: {
      type: Sequelize.JSONB, // Storing consultation, treatment, and medication coverage as a JSON object
      allowNull: false,
    },
    validFrom: {
      type: Sequelize.DATEONLY, // Start date of coverage
      allowNull: false,
    },
    validUntil: {
      type: Sequelize.DATEONLY, // Expiration date of coverage
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM("Active", "Expired", "Pending Verification"),
      defaultValue: "Pending Verification",
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
  
  module.exports = Insurance;
  