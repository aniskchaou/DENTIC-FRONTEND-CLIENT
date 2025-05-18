
var sequelize = require("../db/init.sequelize.js");
var { Sequelize, DataTypes } = require('sequelize');

/* var Diagnostic = sequelize.define('diagnostic', {
//    patient: {  type: Sequelize.INTEGER,references: 'patients',  referencesKey: 'id' },
    heartRate: Sequelize.STRING,
    bloodPressure: Sequelize.STRING,
    temperature: Sequelize.STRING,
    oxygenSaturation: Sequelize.STRING,
    respiratoryRate : Sequelize.STRING,
      patient: {
            type: Sequelize.INTEGER,
            references: {
                model: 'patients',
                key: 'id'
            }
        }
}); */

/* const Diagnostic = sequelize.define("diagnostic", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  patientId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "patients",
      key: "id",
    },
  },
  doctorId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "doctors",
      key: "id",
    },
  },
  clinicId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "clinics",
      key: "id",
    },
  },
  diagnosisDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  chiefComplaint: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  diagnosis: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  diagnosisCode: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  relatedTests: {
    type: Sequelize.JSONB,
    allowNull: true,
    defaultValue: [],
  },
  prescribedMedications: {
    type: Sequelize.JSONB,
    allowNull: true,
    defaultValue: [],
  },
  recommendedTreatments: {
    type: Sequelize.JSONB,
    allowNull: true,
    defaultValue: [],
  },
  followUpRequired: {
    type: Sequelize.ENUM("Yes", "No"),
    defaultValue: "No",
  },
  followUpDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  additionalNotes: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  attachments: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true,
    defaultValue: [],
  },
  status: {
    type: Sequelize.ENUM("Pending", "Confirmed", "Resolved"),
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

module.exports = Diagnostic; */

/* {
    "Diagnostic": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "doctorId": "UUID (Ref to Doctor who made the diagnosis)",
      "clinicId": "UUID (Ref to Clinic)",
      "diagnosisDate": "timestamp",
      "chiefComplaint": "string (Primary symptom reported by the patient)",
      "diagnosis": "string (Medical condition identified, e.g., Periodontitis, Dental Caries)",
      "diagnosisCode": "string (ICD-10 or SNOMED code, if applicable)",
      "relatedTests": [
        {
          "labTestId": "UUID (Ref to Lab Test, if applicable)",
          "testName": "string (e.g., X-Ray, Biopsy, Saliva Test)"
        }
      ],
      "prescribedMedications": [
        {
          "medicamentId": "UUID (Ref to Medicament)",
          "medicamentName": "string",
          "dosage": "string (e.g., 500mg twice a day)",
          "duration": "string (e.g., 7 days)"
        }
      ],
      "recommendedTreatments": [
        {
          "treatmentId": "UUID (Ref to Treatment)",
          "treatmentName": "string (e.g., Root Canal, Extraction)"
        }
      ],
      "followUpRequired": "Yes | No",
      "followUpDate": "timestamp (If applicable)",
      "additionalNotes": "string (Doctor's observations and recommendations)",
      "attachments": ["string (URLs to images, reports, or documents)"],
      "status": "Pending | Confirmed | Resolved",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  } */
  
//module.exports = Diagnostic;


const Diagnosis = sequelize.define("diagnosis", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to the patient",
  },
  doctorId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to the doctor who made the diagnosis",
  },
  diagnosisDate: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: "Date of diagnosis",
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Name of the diagnosed condition",
  },
  severity: {
    type: DataTypes.ENUM("Mild", "Moderate", "Severe"),
    allowNull: true,
    comment: "Severity level of the condition",
  },
  recommendedTreatmentPlanId: {
    type: DataTypes.UUID,
    allowNull: true,
    comment: "Reference to a recommended treatment plan, if applicable",
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: "Additional details about the diagnosis",
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

module.exports = Diagnosis;
