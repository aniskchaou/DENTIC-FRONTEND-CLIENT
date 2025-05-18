var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

/* var Expense = sequelize.define('expense', {
    name: Sequelize.STRING,
    amount: Sequelize.INTEGER,
    datee: Sequelize.DATE,
    note: Sequelize.STRING,
    paymentMode:Sequelize.STRING
});

{
    "Expense": {
      "id": "UUID",
      "expenseCategory": "Rent | Salaries | Equipment | Utilities | Supplies | Maintenance | Marketing | Other",
      "description": "string (Details of the expense, e.g., 'New dental chair purchase')",
      "amount": "float (Total expense amount)",
      "paymentMethod": "Cash | Bank Transfer | Credit Card | Online Payment",
      "paymentStatus": "Pending | Paid | Partially Paid",
      "vendorId": "UUID (Ref to Vendor/Supplier, if applicable)",
      "vendorName": "string (Name of the supplier or service provider)",
      "invoiceId": "UUID (Ref to Invoice, if applicable)",
      "clinicId": "UUID (Ref to Clinic, if multi-location setup)",
      "transactionDate": "timestamp",
      "receiptAttachments": ["string (URLs to receipts, invoices, or proof of payment)"],
      "notes": "string (Additional remarks or justifications)",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  
module.exports = Expense; */
// var sequelize = require("../db/init.sequelize.js");
// var Sequelize = require("sequelize");

var Expense = sequelize.define("expense", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  expenseCategory: {
    type: Sequelize.ENUM(
      "Rent",
      "Salaries",
      "Equipment",
      "Utilities",
      "Supplies",
      "Maintenance",
      "Marketing",
      "Other"
    ),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "",
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  paymentMethod: {
    type: Sequelize.ENUM("Cash", "Bank Transfer", "Credit Card", "Online Payment"),
    allowNull: false,
  },
  paymentStatus: {
    type: Sequelize.ENUM("Pending", "Paid", "Partially Paid"),
    allowNull: false,
    defaultValue: "Pending",
  },
  vendorId: {
    type: Sequelize.UUID,
    allowNull: true,
    references: {
      model: "vendors", // Assuming you have a vendors table
      key: "id",
    },
  },
  vendorName: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "",
  },
  invoiceId: {
    type: Sequelize.UUID,
    allowNull: true,
    references: {
      model: "invoices", // Assuming you have an invoices table
      key: "id",
    },
  },
  clinicId: {
    type: Sequelize.UUID,
    allowNull: true,
    references: {
      model: "clinics", // Assuming you have a clinics table
      key: "id",
    },
  },
  transactionDate: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  receiptAttachments: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true,
    defaultValue: [],
  },
  notes: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "",
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

module.exports = Expense;
