

var sequelize = require("../db/init.sequelize.js");
var { Sequelize, DataTypes } = require('sequelize');
/* 
var MedicamentManufacture = sequelize.define('medicament_manufacture', {
    name: Sequelize.STRING
});

{
    "MedicamentManufacture": {
      "id": "UUID",
      "name": "string (e.g., Pfizer, Johnson & Johnson, GlaxoSmithKline)",
      "contactPerson": {
        "fullName": "string",
        "phone": "string",
        "email": "string"
      },
      "address": {
        "street": "string",
        "city": "string",
        "state": "string",
        "postalCode": "string",
        "country": "string"
      },
      "phone": "string",
      "email": "string",
      "website": "string (URL)",
      "licenseNumber": "string (Regulatory approval/license ID)",
      "certifications": ["string (e.g., FDA Approved, GMP Certified)"],
      "medicamentsSupplied": [
        {
          "medicamentId": "UUID (Ref to Medicament)",
          "medicamentName": "string"
        }
      ],
      "contractStartDate": "timestamp",
      "contractEndDate": "timestamp",
      "status": "Active | Inactive | Suspended",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  
module.exports = MedicamentManufacture;  */


const MedicamentManufacture = sequelize.define("medicamentManufacture", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "e.g., Pfizer, Johnson & Johnson, GlaxoSmithKline"
  },
  contactPerson: {
    type: DataTypes.JSONB,
    allowNull: false,
    comment: "Contact person details including full name, phone, and email",
    get() {
      const value = this.getDataValue('contactPerson');
      return value ? value : { fullName: null, phone: null, email: null }; // default value
    },
    set(value) {
      this.setDataValue('contactPerson', value);
    }
  },
  address: {
    type: DataTypes.JSONB,
    allowNull: false,
    comment: "Address of the manufacturer including street, city, state, postalCode, and country",
    get() {
      const value = this.getDataValue('address');
      return value ? value : { street: null, city: null, state: null, postalCode: null, country: null }; // default value
    },
    set(value) {
      this.setDataValue('address', value);
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Phone number of the manufacturer"
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Email address of the manufacturer"
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "Website URL of the manufacturer"
  },
  licenseNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "Regulatory approval/license ID"
  },
  certifications: {
    type: DataTypes.JSONB,
    allowNull: true,
    comment: "List of certifications like FDA Approved, GMP Certified"
  },
  medicamentsSupplied: {
    type: DataTypes.JSONB,
    allowNull: true,
    comment: "List of medicaments supplied by the manufacturer",
    get() {
      const value = this.getDataValue('medicamentsSupplied');
      return value ? value : [];
    },
    set(value) {
      this.setDataValue('medicamentsSupplied', value);
    }
  },
  contractStartDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  contractEndDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Active', 'Inactive', 'Suspended'),
    allowNull: false,
    comment: "Status of the manufacturer contract"
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

module.exports = MedicamentManufacture;
