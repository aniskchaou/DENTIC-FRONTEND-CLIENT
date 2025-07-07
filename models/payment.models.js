var sequelize = require("../db/init.sequelize.js");
//var Sequelize = require('sequelize');

/* var Payment = sequelize.define('payment', {
    invoiceNumber: Sequelize.STRING,
    paymentDate: Sequelize.STRING,
    paymenMode: Sequelize.STRING,
    amountReceived: Sequelize.STRING,
    invoiceBlanceDue: Sequelize.STRING,
    patient: Sequelize.STRING
});
{
    "Payment": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "appointmentId": "UUID (Ref to Appointment, if applicable)",
      "invoiceId": "UUID (Ref to Invoice, if applicable)",
      "clinicId": "UUID (Ref to Clinic)",
      "amount": "float (Total amount paid)",
      "currency": "string (e.g., USD, EUR)",
      "paymentMethod": "Cash | Credit Card | Debit Card | Insurance | Online Payment",
      "transactionId": "string (Reference ID from payment gateway)",
      "insuranceClaimId": "UUID (Ref to Insurance Claim, if applicable)",
      "paymentStatus": "Pending | Completed | Failed | Refunded",
      "paymentDate": "timestamp",
      "notes": "string (Optional additional details)",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  

module.exports = Payment; */

const { Sequelize, DataTypes } = require("sequelize");
//const sequelize = require("../config/database");

const Payment = sequelize.define("payment", {

  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to the patient making the payment",
  },
  appointmentId: {
    type: DataTypes.UUID,
    allowNull: true,
    comment: "Reference to the associated appointment (if applicable)",
  },
  invoiceId: {
    type: DataTypes.UUID,
    allowNull: true,
    comment: "Reference to the associated invoice (if applicable)",
  },
  clinicId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to the clinic receiving the payment",
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    comment: "Total amount paid",
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Currency used for the payment (e.g., USD, EUR)",
  },
  paymentMethod: {
    type: DataTypes.ENUM("Cash", "Credit Card", "Debit Card", "Insurance", "Online Payment"),
    allowNull: false,
    comment: "Method of payment",
  },
  transactionId: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "Reference ID from the payment gateway",
  },
  insuranceClaimId: {
    type: DataTypes.UUID,
    allowNull: true,
    comment: "Reference to the insurance claim if applicable",
  },
  paymentStatus: {
    type: DataTypes.ENUM("Pending", "Completed", "Failed", "Refunded"),
    allowNull: false,
    comment: "Status of the payment",
  },
  paymentDate: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: "Timestamp when the payment was made",
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "Optional additional details related to the payment",
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    comment: "Timestamp when the payment record was created",
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    comment: "Timestamp when the payment record was last updated",
  },
});

/* // Define the relationships with other models
Payment.associate = models => {
  // A payment is associated with a patient, clinic, and potentially an appointment or invoice
  Payment.belongsTo(models.Patient, { foreignKey: "patientId" });
  Payment.belongsTo(models.Appointment, { foreignKey: "appointmentId" });
  Payment.belongsTo(models.Invoice, { foreignKey: "invoiceId" });
  Payment.belongsTo(models.Clinic, { foreignKey: "clinicId" });
  Payment.belongsTo(models.InsuranceClaim, { foreignKey: "insuranceClaimId" });
}; */

module.exports = Payment;
