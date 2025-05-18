



/* var Invoice = sequelize.define('invoice', {
    client: Sequelize.STRING,
    date: Sequelize.STRING,
    note: Sequelize.STRING,
    status:Sequelize.STRING
});
{
    "Invoice": {
      "id": "UUID",
      "invoiceNumber": "string (Unique Invoice ID, e.g., INV-2025001)",
      "patientId": "UUID (Ref to Patient)",
      "appointmentId": "UUID (Ref to Appointment, if applicable)",
      "doctorId": "UUID (Ref to Doctor)",
      "clinicId": "UUID (Ref to Clinic)",
      "items": [
        {
          "itemId": "UUID",
          "itemType": "Consultation | Treatment | Medication | Lab Test | Surgery",
          "itemDescription": "string (Details of the service/medication)",
          "quantity": "integer (Number of units/services provided)",
          "unitPrice": "float (Cost per unit)",
          "totalPrice": "float (quantity * unitPrice)"
        }
      ],
      "subTotal": "float (Sum of all item totals)",
      "discount": {
        "amount": "float",
        "percentage": "float",
        "discountReason": "string (If applicable)"
      },
      "taxAmount": "float",
      "grandTotal": "float (subTotal - discount + taxAmount)",
      "paymentStatus": "Pending | Paid | Partially Paid | Refunded",
      "paymentMethod": "Cash | Credit Card | Debit Card | Insurance | Online Payment",
      "transactionId": "string (Reference from payment gateway, if applicable)",
      "insuranceClaimId": "UUID (Ref to Insurance Claim, if applicable)",
      "invoiceDate": "timestamp",
      "dueDate": "timestamp",
      "notes": "string (Additional invoice details or terms)",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  
//Invoice	Amount	Tax	Date	Customer	Status
module.exports = Invoice; */



var sequelize = require("../db/init.sequelize.js");
var { Sequelize, DataTypes } = require('sequelize');

const Invoice = sequelize.define("invoice", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  invoiceNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "patients",
      key: "id",
    },
  },
  appointmentId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: "appointments",
      key: "id",
    },
  },
  doctorId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "doctors",
      key: "id",
    },
  },
  clinicId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "clinics",
      key: "id",
    },
  },
  items: {
    type: DataTypes.JSONB, // Store an array of objects for invoice items
    allowNull: false,
  },
  subTotal: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  discount: {
    type: DataTypes.JSONB, // Store discount details as an object
    allowNull: true,
  },
  taxAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  grandTotal: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.ENUM("Pending", "Paid", "Partially Paid", "Refunded"),
    allowNull: false,
    defaultValue: "Pending",
  },
  paymentMethod: {
    type: DataTypes.ENUM("Cash", "Credit Card", "Debit Card", "Insurance", "Online Payment"),
    allowNull: true,
  },
  transactionId: {
    type: DataTypes.STRING,
    allowNull: true, // Reference from payment gateway, if applicable
  },
  insuranceClaimId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: "insurance_claims",
      key: "id",
    },
  },
  invoiceDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
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

module.exports = Invoice;
