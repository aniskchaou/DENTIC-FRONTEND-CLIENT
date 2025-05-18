/* {
    "DentalMembership": {
      "id": "UUID",
      "patientId": "UUID (Ref to Patient)",
      "membershipPlan": "Basic | Premium | Family | Corporate",
      "benefits": [
        "Free Cleanings",
        "Discounted Treatments",
        "Priority Booking",
        "Emergency Support"
      ],
      "validityPeriod": {
        "startDate": "timestamp",
        "endDate": "timestamp"
      },
      "paymentStatus": "Active | Expired | Canceled",
      "renewalDate": "timestamp",
      "lastPaymentAmount": "decimal",
      "lastPaymentDate": "timestamp",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
   */


  var sequelize = require("../db/init.sequelize.js");
  var { Sequelize, DataTypes } = require('sequelize');

const DentalMembership = sequelize.define("dentalMembership", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: "Reference to Patient"
  },
  membershipPlan: {
    type: DataTypes.ENUM("Basic", "Premium", "Family", "Corporate"),
    allowNull: false,
  },
  benefits: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [
      "Free Cleanings",
      "Discounted Treatments",
      "Priority Booking",
      "Emergency Support"
    ],
    comment: "List of benefits provided under the membership plan",
    get() {
      const value = this.getDataValue('benefits');
      return value ? value : [];
    },
    set(value) {
      this.setDataValue('benefits', value);
    }
  },
  validityPeriod: {
    type: DataTypes.JSONB,
    allowNull: false,
    comment: "Validity period of the membership",
    get() {
      const value = this.getDataValue('validityPeriod');
      return value ? value : { startDate: null, endDate: null };
    },
    set(value) {
      this.setDataValue('validityPeriod', value);
    }
  },
  paymentStatus: {
    type: DataTypes.ENUM("Active", "Expired", "Canceled"),
    allowNull: false,
  },
  renewalDate: {
    type: DataTypes.DATE,
    allowNull: true,
    comment: "Date when the membership is due for renewal"
  },
  lastPaymentAmount: {
    type: DataTypes.DECIMAL,
    allowNull: true,
    comment: "Amount of the last payment made"
  },
  lastPaymentDate: {
    type: DataTypes.DATE,
    allowNull: true,
    comment: "Date when the last payment was made"
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

module.exports = DentalMembership;
