/* {
    "MarketingCRM": {
      "id": "UUID",
      "campaignName": "string",
      "campaignType": "Email | SMS | Social Media | In-App Notification",
      "targetAudience": {
        "ageGroup": "string",
        "treatmentHistory": ["string"],
        "lastVisitDate": "date"
      },
      "messageTemplate": "string",
      "scheduleDate": "date",
      "status": "Scheduled | In Progress | Completed | Canceled",
      "performanceMetrics": {
        "openRate": "percentage",
        "clickThroughRate": "percentage",
        "conversionRate": "percentage"
      },
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  } */


    var sequelize = require("../db/init.sequelize.js");
    var { Sequelize, DataTypes } = require('sequelize');

const MarketingCRM = sequelize.define("marketingCRM", {
  campaignName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  campaignType: {
    type: DataTypes.ENUM("Email", "SMS", "Social Media", "In-App Notification"),
    allowNull: false,
  },
  targetAudience: {
    type: DataTypes.JSONB,  // For storing ageGroup, treatmentHistory, and lastVisitDate
    allowNull: false,
  },
  messageTemplate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  scheduleDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("Scheduled", "In Progress", "Completed", "Canceled"),
    defaultValue: "Scheduled",
    allowNull: false,
  },
  performanceMetrics: {
    type: DataTypes.JSONB,  // Store performance data like openRate, clickThroughRate, conversionRate
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

module.exports = MarketingCRM;

  