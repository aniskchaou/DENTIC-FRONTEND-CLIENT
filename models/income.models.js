

var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

/* var Income = sequelize.define('income', {
    name_income: Sequelize.STRING,
    amount: Sequelize.INTEGER,
    datee: Sequelize.DATE,
    note: Sequelize.STRING
});

{
    "Income": {
      "id": "UUID",
      "incomeCategory": "Consultation Fees | Treatment Fees | Surgery | Medication Sales | Lab Tests | Insurance Payments | Other",
      "description": "string (Details of the income source, e.g., 'Root Canal Procedure Payment')",
      "amount": "float (Total income amount)",
      "paymentMethod": "Cash | Credit Card | Debit Card | Insurance | Online Payment",
      "paymentStatus": "Pending | Received | Partially Received",
      "patientId": "UUID (Ref to Patient, if applicable)",
      "doctorId": "UUID (Ref to Doctor, if applicable)",
      "invoiceId": "UUID (Ref to Invoice, if applicable)",
      "insuranceClaimId": "UUID (Ref to Insurance Claim, if applicable)",
      "clinicId": "UUID (Ref to Clinic, if multi-location setup)",
      "transactionDate": "timestamp",
      "receiptAttachments": ["string (URLs to payment receipts, invoices, or proof of payment)"],
      "notes": "string (Additional remarks or justifications)",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  
module.exports = Income;  */

var sequelize = require("../db/init.sequelize.js");
var { Sequelize, DataTypes } = require('sequelize');

const Income = sequelize.define("income", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  incomeCategory: {
    type: Sequelize.ENUM(
      "Consultation Fees",
      "Treatment Fees",
      "Surgery",
      "Medication Sales",
      "Lab Tests",
      "Insurance Payments",
      "Other"
    ),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING, // Details of the income source
    allowNull: true,
  },
  amount: {
    type: Sequelize.FLOAT, // Total income amount
    allowNull: false,
  },
  paymentMethod: {
    type: Sequelize.ENUM(
      "Cash",
      "Credit Card",
      "Debit Card",
      "Insurance",
      "Online Payment"
    ),
    allowNull: false,
  },
  paymentStatus: {
    type: Sequelize.ENUM("Pending", "Received", "Partially Received"),
    defaultValue: "Pending",
  },
  patientId: {
    type: Sequelize.UUID,
    allowNull: true,
    references: {
      model: "patients",
      key: "id",
    },
  },
  doctorId: {
    type: Sequelize.UUID,
    allowNull: true,
    references: {
      model: "doctors",
      key: "id",
    },
  },
  invoiceId: {
    type: Sequelize.UUID,
    allowNull: true,
    references: {
      model: "invoices",
      key: "id",
    },
  },
  insuranceClaimId: {
    type: Sequelize.UUID,
    allowNull: true,
    references: {
      model: "insurance_claims",
      key: "id",
    },
  },
  clinicId: {
    type: Sequelize.UUID,
    allowNull: true,
    references: {
      model: "clinics",
      key: "id",
    },
  },
  transactionDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  receiptAttachments: {
    type: Sequelize.ARRAY(Sequelize.STRING), // Array of receipt URLs
    defaultValue: [],
  },
  notes: {
    type: Sequelize.STRING, // Additional remarks
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

module.exports = Income;
