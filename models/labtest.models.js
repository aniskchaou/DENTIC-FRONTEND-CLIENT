/* var LabTest = sequelize.define('labtest', {
    datee: Sequelize.STRING,
    patient: Sequelize.STRING,
    content: Sequelize.STRING,
    status:Sequelize.STRING
});
{
    "LabTest": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "doctorId": "UUID (Ref to Doctor)",
      "clinicId": "UUID (Ref to Clinic)",
      "testName": "string (e.g., X-Ray, Blood Test, Saliva Test, Biopsy)",
      "testCategory": "Radiology | Pathology | Microbiology | Hematology",
      "testDescription": "string (Purpose and details of the test)",
      "sampleType": "Blood | Saliva | Tissue | Other",
      "sampleCollectionDate": "timestamp",
      "sampleCollectedBy": "UUID (Ref to Lab Technician)",
      "testStatus": "Pending | In Progress | Completed | Canceled",
      "result": {
        "resultId": "UUID",
        "resultDate": "timestamp",
        "resultDescription": "string (Findings from the test)",
        "attachments": ["string (URLs to reports, images, or documents)"]
      },
      "laboratoryId": "UUID (Ref to External or Internal Lab)",
      "testCost": "float (Cost of the test)",
      "insuranceCovered": "Yes | No",
      "paymentStatus": "Pending | Paid | Billed to Insurance",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  
module.exports = LabTest;  */


var sequelize = require("../db/init.sequelize.js");
var { Sequelize, DataTypes } = require('sequelize');
const LabTest = sequelize.define("labTest", {

  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    /* references: {
      model: "patients",
      key: "id",
    }, */
  },
  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    /* references: {
      model: "doctors",
      key: "id",
    }, */
  },
  clinicId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    /* references: {
      model: "clinics",
      key: "id",
    }, */
  },
  testName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  testCategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  testDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sampleCollectionDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  sampleCollectedBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    /* references: {
      model: "lab_technicians",
      key: "id",
    }, */
  },
  testStatus: {
    type: DataTypes.ENUM("Pending", "In Progress", "Completed", "Canceled"),
    allowNull: false,
    defaultValue: "Pending",
  },
  result: {
    type: DataTypes.JSONB, // Store result details dynamically
    allowNull: true,
  },
  laboratoryId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    /* references: {
      model: "laboratories",
      key: "id",
    }, */
  },
  testCost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  insuranceCovered: {
    type: DataTypes.ENUM("Yes", "No"),
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.ENUM("Pending", "Paid", "Billed to Insurance"),
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

/**
 * Insert dummy lab tests for testing/demo purposes.
 */
LabTest.insertDummyLabTests = async function() {
  const dummyLabTests = [
    {
      patientId: 1,
      doctorId: 2,
      clinicId: 3,
      testName: "Dental X-Ray",
      testCategory: "Radiology",
      testDescription: "Panoramic dental X-ray to check for cavities and bone loss.",
      sampleType: "Other",
      sampleCollectionDate: new Date("2025-07-01T09:00:00Z"),
      sampleCollectedBy: 1,
      testStatus: "Completed",
      result: {
        resultId: "55555555-eeee-ffff-aaaa-555555555555",
        resultDate: "2025-07-01T12:00:00Z",
        resultDescription: "No cavities detected. Mild bone loss observed.",
        attachments: ["https://example.com/reports/xray1.pdf"]
      },
      laboratoryId: 1,
      testCost: 120.00,
      insuranceCovered: "Yes",
      paymentStatus: "Paid"
    },
    {
      patientId: 1,
      doctorId: 2,
      clinicId: 3,
      testName: "Blood Test",
      testCategory: "Hematology",
      testDescription: "CBC to check for infection.",
      sampleType: "Blood",
      sampleCollectionDate: new Date("2025-07-02T10:30:00Z"),
      sampleCollectedBy: 4,
      testStatus: "Completed",
      result: {
        resultId: "bbbbbbbb-eeee-ffff-aaaa-bbbbbbbbbbbb",
        resultDate: "2025-07-02T13:00:00Z",
        resultDescription: "WBC count elevated, indicating infection.",
        attachments: []
      },
      laboratoryId: 1,
      testCost: 80.00,
      insuranceCovered: "No",
      paymentStatus: "Paid"
    },
    {
      patientId: 1,
      doctorId: 2,
      clinicId: 3,
      testName: "Saliva Test",
      testCategory: "Microbiology",
      testDescription: "Test for bacterial load in saliva.",
      sampleType: "Saliva",
      sampleCollectionDate: new Date("2025-07-03T11:15:00Z"),
      sampleCollectedBy: 1,
      testStatus: "Pending",
      result: null,
      laboratoryId: 1,
      testCost: 60.00,
      insuranceCovered: "Yes",
      paymentStatus: "Pending"
    }
  ];
  return await LabTest.bulkCreate(dummyLabTests);
};

module.exports = LabTest;
