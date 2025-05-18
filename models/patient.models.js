
var sequelize = require("../db/init.sequelize.js");
var { Sequelize, DataTypes } = require('sequelize');
/* 
var Patient = sequelize.define('patient', {
    namepatient: Sequelize.STRING,
    emailpatient: Sequelize.STRING,
    birth: Sequelize.DATE,
    telephone: Sequelize.STRING,
    gender: Sequelize.STRING,
    address: Sequelize.STRING,
    bloodGroupe:Sequelize.STRING,
    Status:Sequelize.STRING,
    height:Sequelize.STRING,
    weight:Sequelize.STRING
});
{
    "Patient": {
      "id": "UUID",
      "userId": "UUID (Ref to User)",
      "medicalRecordNumber": "string",
      "insuranceId": "UUID (Ref to Insurance)",
      "bloodType": "A+ | A- | B+ | B- | O+ | O- | AB+ | AB-",
      "allergies": ["string"],
      "medicalHistory": [
        {
          "condition": "string",
          "diagnosedAt": "date",
          "notes": "string"
        }
      ],
      "currentMedications": [
        {
          "name": "string",
          "dosage": "string",
          "frequency": "string",
          "prescribedBy": "UUID (Ref to Doctor)"
        }
      ],
      "emergencyContact": {
        "name": "string",
        "relationship": "string",
        "phone": "string"
      },
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  
module.exports = Patient; */

// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("../config/database");

const Patient = sequelize.define("patient", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to the user account of the patient",
  },
  medicalRecordNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "Unique medical record number for the patient",
  },
  insuranceId: {
    type: DataTypes.UUID,
    allowNull: true,
    comment: "Reference to the patient's insurance provider",
  },
  bloodType: {
    type: DataTypes.ENUM("A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"),
    allowNull: true,
    comment: "Blood type of the patient",
  },
  allergies: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
    comment: "List of allergies the patient has",
  },
  medicalHistory: {
    type: DataTypes.JSONB,
    allowNull: true,
    comment: "Medical history of the patient, including conditions, diagnosis, and notes",
  },
  currentMedications: {
    type: DataTypes.JSONB,
    allowNull: true,
    comment: "Current medications being taken by the patient, including dosage, frequency, and prescribing doctor",
  },
  emergencyContact: {
    type: DataTypes.JSONB,
    allowNull: true,
    comment: "Emergency contact details for the patient",
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    comment: "Timestamp when the patient record was created",
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    comment: "Timestamp when the patient record was last updated",
  },
});

/* // Define the relationships with other models
Patient.associate = models => {
  // A patient is associated with one user account and may have one insurance
  Patient.belongsTo(models.User, { foreignKey: "userId" });
  Patient.belongsTo(models.Insurance, { foreignKey: "insuranceId" });

  // A patient can have multiple current medications, so we define this as a one-to-many relationship
  Patient.hasMany(models.Medication, { foreignKey: "patientId" });

  // Medical history and current medications can be stored as JSON objects or arrays
  // This will be handled via Sequelize's built-in support for JSONB data types.
}; */

module.exports = Patient;
