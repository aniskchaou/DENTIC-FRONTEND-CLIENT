
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
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    /* references: {
      model: "patients",
      key: "id",
    }, */
  },
  doctorId: {
    type: DataTypes.UUID,
    allowNull: false,
    /* references: {
      model: "doctors",
      key: "id",
    }, */
  },
  clinicId: {
    type: DataTypes.UUID,
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
    type: DataTypes.ENUM("Radiology", "Pathology", "Microbiology", "Hematology"),
    allowNull: false,
  },
  testDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sampleType: {
    type: DataTypes.ENUM("Blood", "Saliva", "Tissue", "Other"),
    allowNull: false,
  },
  sampleCollectionDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  sampleCollectedBy: {
    type: DataTypes.UUID,
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
    type: DataTypes.UUID,
    allowNull: false,
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

module.exports = LabTest;
