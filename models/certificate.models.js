// var sequelize = require("../db/init.sequelize.js");
// var Sequelize = require('sequelize');

/* var Certificate = sequelize.define('certificate', {
//    patient: {  type: Sequelize.INTEGER,references: 'patients',  referencesKey: 'id' },
    date: Sequelize.STRING,
    template: Sequelize.STRING,
    content: Sequelize.STRING,
      patient: {
            type: Sequelize.INTEGER,
            references: {
                model: 'patients',
                key: 'id'
            }
        }
});
{
    "Certificate": {
      "id": "UUID",
      "certificateNumber": "string (Unique ID, e.g., CERT-2025001)",
      "patientId": "UUID (Ref to Patient)",
      "doctorId": "UUID (Ref to Issuing Doctor)",
      "clinicId": "UUID (Ref to Clinic)",
      "certificateType": "Medical Fitness | Treatment Confirmation | Sick Leave | Surgery Clearance",
      "issueDate": "timestamp",
      "validUntil": "timestamp (Optional, if the certificate has an expiry date)",
      "diagnosis": "string (Condition requiring the certificate)",
      "treatmentDetails": "string (Details of the treatment or procedure)",
      "recommendations": "string (Rest period, activity restrictions, or other instructions)",
      "attachments": ["string (URLs to signed PDF, scanned copy, etc.)"],
      "signature": "string (Digital signature of the doctor)",
      "status": "Draft | Issued | Revoked",
      "notes": "string (Additional details)",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  
module.exports = Certificate; */

var sequelize = require("../db/init.sequelize.js");
var Sequelize = require("sequelize");

var Certificate = sequelize.define("certificate", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  certificateNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  patientId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "patients", // Assuming patients are stored in the "patients" table
      key: "id",
    },
  },
  doctorId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "users", // Assuming doctors are stored in the "users" table
      key: "id",
    },
  },
  clinicId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "clinics", // Assuming clinics are stored in a "clinics" table
      key: "id",
    },
  },
  certificateType: {
    type: Sequelize.ENUM(
      "Medical Fitness",
      "Treatment Confirmation",
      "Sick Leave",
      "Surgery Clearance"
    ),
    allowNull: false,
  },
  issueDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  validUntil: {
    type: Sequelize.DATE,
    allowNull: true, // Optional expiry date
  },
  diagnosis: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  treatmentDetails: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  recommendations: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  attachments: {
    type: Sequelize.ARRAY(Sequelize.STRING), // Storing multiple attachment URLs
    allowNull: true,
  },
  signature: {
    type: Sequelize.STRING,
    allowNull: false, // Digital signature of the doctor
  },
  status: {
    type: Sequelize.ENUM("Draft", "Issued", "Revoked"),
    allowNull: false,
    defaultValue: "Draft",
  },
  notes: {
    type: Sequelize.STRING,
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

module.exports = Certificate;
