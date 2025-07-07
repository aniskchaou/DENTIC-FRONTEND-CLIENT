
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');
/* 
var Consultation = sequelize.define('consultation', {
    instructiondate: Sequelize.STRING,
    applieddate: Sequelize.STRING,
//     patient: {  type: Sequelize.INTEGER,references: 'patients',  referencesKey: 'id' },
    instruction: Sequelize.STRING,
    description: Sequelize.STRING,
      patient: {
            type: Sequelize.INTEGER,
            references: {
                model: 'patients',
                key: 'id'
            }
        }
});
{
    "Consultation": {
      "id": "UUID",
      "appointmentId": "UUID (Ref to Appointment, if scheduled)",
      "patientId": "UUID (Ref to Patient)",
      "doctorId": "UUID (Ref to Doctor)",
      "clinicId": "UUID (Ref to Clinic)",
      "consultationDate": "timestamp",
      "consultationType": "In-Person | Virtual | Emergency",
      "reasonForVisit": "string (e.g., Toothache, Routine Check-up, Orthodontic Consultation)",
      "symptoms": ["string (List of reported symptoms)"],
      "diagnosis": {
        "diagnosisId": "UUID (Ref to Diagnostic)",
        "diagnosisName": "string (e.g., Periodontitis, Cavities)"
      },
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
      "labTestsOrdered": [
        {
          "labTestId": "UUID (Ref to Lab Test)",
          "testName": "string (e.g., X-Ray, Biopsy)"
        }
      ],
      "consultationNotes": "string (Doctor's observations and recommendations)",
      "followUpRequired": "Yes | No",
      "followUpDate": "timestamp (If applicable)",
      "consultationFee": "float (Fee charged for the consultation)",
      "paymentStatus": "Pending | Paid | Billed to Insurance",
      "attachments": ["string (URLs to reports, images, or documents)"],
      "status": "Completed | In Progress | Canceled",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  
module.exports = Consultation; */

// var sequelize = require("../db/init.sequelize.js");
// var Sequelize = require("sequelize");

var Consultation = sequelize.define("consultation", {

  appointmentId: {
    type: Sequelize.UUID,
    allowNull: true,
    // references: {
    //   model: "appointments", // Assuming appointments are stored in a table
    //   key: "id",
    // },
  },
  patientId: {
    type: Sequelize.UUID,
    allowNull: false,
    // references: {
    //   model: "patients", // Assuming patients are stored in a table
    //   key: "id",
    // },
  },
  doctorId: {
    type: Sequelize.UUID,
    allowNull: false,
    // references: {
    //   model: "users", // Assuming doctors are in the User table
    //   key: "id",
    // },
  },
  clinicId: {
    type: Sequelize.UUID,
    allowNull: false,
    // references: {
    //   model: "clinics", // Assuming clinics are in a table
    //   key: "id",
    // },
  },
  consultationDate: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  consultationType: {
    type: Sequelize.ENUM("In-Person", "Virtual", "Emergency"),
    allowNull: false,
  },
  reasonForVisit: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  symptoms: {
    type: Sequelize.ARRAY(Sequelize.STRING), // List of symptoms
    allowNull: true,
  },
  diagnosis: {
    type: Sequelize.JSONB, // Storing diagnosis details in JSON format
    allowNull: true,
  },
  prescribedMedications: {
    type: Sequelize.JSONB, // Array of prescribed medications
    allowNull: true,
  },
  recommendedTreatments: {
    type: Sequelize.JSONB, // Array of recommended treatments
    allowNull: true,
  },
  labTestsOrdered: {
    type: Sequelize.JSONB, // Array of ordered lab tests
    allowNull: true,
  },
  consultationNotes: {
    type: Sequelize.TEXT, // Doctor's notes and recommendations
    allowNull: true,
  },
  followUpRequired: {
    type: Sequelize.ENUM("Yes", "No"),
    allowNull: false,
    defaultValue: "No",
  },
  followUpDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  consultationFee: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  },
  paymentStatus: {
    type: Sequelize.ENUM("Pending", "Paid", "Billed to Insurance"),
    allowNull: false,
    defaultValue: "Pending",
  },
  attachments: {
    type: Sequelize.ARRAY(Sequelize.STRING), // URLs for attached reports
    allowNull: true,
  },
  status: {
    type: Sequelize.ENUM("Completed", "In Progress", "Canceled"),
    allowNull: false,
    defaultValue: "In Progress",
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

module.exports = Consultation;
