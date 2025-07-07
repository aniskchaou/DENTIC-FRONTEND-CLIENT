
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

//module.exports = Patient;


async function insertPatients() {
  const patients = [
    {
      userId: "b1fdf1ec-a111-46d1-91a3-bbfef1230001",
      medicalRecordNumber: "MRN10001",
      insuranceId: "2cfb11d3-0101-41d4-801b-f0afc1230001",
      bloodType: "A+",
      allergies: ["Penicillin"],
      medicalHistory: [
        { condition: "Diabetes", diagnosedAt: "2018-01-15", notes: "Type 2" },
      ],
      currentMedications: [
        {
          name: "Metformin",
          dosage: "500mg",
          frequency: "Twice daily",
          prescribedBy: "1a2b3c4d-0000-4000-b000-000000000001",
        },
      ],
      emergencyContact: {
        name: "Alice Johnson",
        relationship: "Sister",
        phone: "+11123456701",
      },
    },
    {
      userId: "b1fdf1ec-a111-46d1-91a3-bbfef1230002",
      medicalRecordNumber: "MRN10002",
      insuranceId: null,
      bloodType: "B-",
      allergies: [],
      medicalHistory: [],
      currentMedications: [],
      emergencyContact: {
        name: "Bob Lee",
        relationship: "Father",
        phone: "+11123456702",
      },
    },
    {
      userId: "b1fdf1ec-a111-46d1-91a3-bbfef1230003",
      medicalRecordNumber: "MRN10003",
      insuranceId: "2cfb11d3-0101-41d4-801b-f0afc1230003",
      bloodType: "O+",
      allergies: ["Shellfish", "Dust"],
      medicalHistory: [
        { condition: "Hypertension", diagnosedAt: "2020-06-01", notes: "Stable" },
      ],
      currentMedications: [],
      emergencyContact: {
        name: "Karen Smith",
        relationship: "Mother",
        phone: "+11123456703",
      },
    },
    {
      userId: "b1fdf1ec-a111-46d1-91a3-bbfef1230004",
      medicalRecordNumber: "MRN10004",
      insuranceId: null,
      bloodType: "AB+",
      allergies: ["Pollen"],
      medicalHistory: [],
      currentMedications: [
        {
          name: "Claritin",
          dosage: "10mg",
          frequency: "Once daily",
          prescribedBy: "1a2b3c4d-0000-4000-b000-000000000002",
        },
      ],
      emergencyContact: {
        name: "Tom Blake",
        relationship: "Friend",
        phone: "+11123456704",
      },
    },
    {
      userId: "b1fdf1ec-a111-46d1-91a3-bbfef1230005",
      medicalRecordNumber: "MRN10005",
      insuranceId: "2cfb11d3-0101-41d4-801b-f0afc1230005",
      bloodType: "O-",
      allergies: ["Latex"],
      medicalHistory: [
        { condition: "Eczema", diagnosedAt: "2019-09-12", notes: "Mild flare-ups" },
      ],
      currentMedications: [],
      emergencyContact: {
        name: "Lena Duke",
        relationship: "Spouse",
        phone: "+11123456705",
      },
    },
  ];

  try {
    await sequelize.authenticate();
    console.log("DB connection successful");

    await Patient.bulkCreate(patients, { validate: true });
    console.log("5 patients inserted successfully");
  } catch (err) {
    console.error("Error inserting patients:", err);
  } finally {
    await sequelize.close();
  }
}

module.exports = {
  Patient,
  insertPatients,
};