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

/**
 * Insert dummy consultations for testing/demo purposes.
 */
Consultation.insertDummyConsultations = async function() {
  const dummyConsultations = [
    {
      appointmentId: "11111111-aaaa-bbbb-cccc-111111111111",
      patientId: "22222222-bbbb-cccc-dddd-222222222222",
      doctorId: "33333333-cccc-dddd-eeee-333333333333",
      clinicId: "44444444-dddd-eeee-ffff-444444444444",
      consultationDate: new Date("2025-07-01T10:00:00Z"),
      consultationType: "In-Person",
      reasonForVisit: "Toothache and swelling",
      symptoms: ["Toothache", "Swelling", "Fever"],
      diagnosis: { diagnosisId: "55555555-eeee-ffff-aaaa-555555555555", diagnosisName: "Dental Abscess" },
      prescribedMedications: [
        {
          medicamentId: "66666666-ffff-aaaa-bbbb-666666666666",
          medicamentName: "Amoxicillin",
          dosage: "500mg",
          duration: "7 days"
        }
      ],
      recommendedTreatments: [
        {
          treatmentId: "77777777-aaaa-bbbb-cccc-777777777777",
          treatmentName: "Root Canal"
        }
      ],
      labTestsOrdered: [
        {
          labTestId: "88888888-bbbb-cccc-dddd-888888888888",
          testName: "X-Ray"
        }
      ],
      consultationNotes: "Patient advised to start antibiotics and return for root canal.",
      followUpRequired: "Yes",
      followUpDate: new Date("2025-07-08T10:00:00Z"),
      consultationFee: 100.0,
      paymentStatus: "Pending",
      attachments: ["https://example.com/xray1.jpg"],
      status: "In Progress"
    },
    {
      appointmentId: "99999999-cccc-dddd-eeee-999999999999",
      patientId: "aaaaaaaa-dddd-eeee-ffff-aaaaaaaaaaaa",
      doctorId: "bbbbbbbb-eeee-ffff-aaaa-bbbbbbbbbbbb",
      clinicId: "cccccccc-ffff-aaaa-bbbb-cccccccccccc",
      consultationDate: new Date("2025-07-02T14:30:00Z"),
      consultationType: "Virtual",
      reasonForVisit: "Routine check-up",
      symptoms: [],
      diagnosis: { diagnosisId: "dddddddd-aaaa-bbbb-cccc-dddddddddddd", diagnosisName: "Healthy" },
      prescribedMedications: [],
      recommendedTreatments: [],
      labTestsOrdered: [],
      consultationNotes: "No issues found. Patient advised to maintain oral hygiene.",
      followUpRequired: "No",
      followUpDate: null,
      consultationFee: 50.0,
      paymentStatus: "Paid",
      attachments: [],
      status: "Completed"
    }
  ];
  return await Consultation.bulkCreate(dummyConsultations);
};

module.exports = Consultation;
module.exports.insertDummyConsultations = Consultation.insertDummyConsultations;
