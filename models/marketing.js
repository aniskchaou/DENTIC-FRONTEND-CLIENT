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

async function addDummyMarketingData() {
  try {


    await MarketingCRM.bulkCreate([
      {
        campaignName: "July Email Blast",
        campaignType: "Email",
        targetAudience: {
          ageGroup: "25-40",
          treatmentHistory: "Orthodontics",
          lastVisitDate: "2024-12-01",
        },
        messageTemplate: "Don't miss our summer special!",
        scheduleDate: new Date("2025-07-10"),
        status: "Scheduled",
        performanceMetrics: {
          openRate: null,
          clickThroughRate: null,
          conversionRate: null,
        },
      },
      {
        campaignName: "Loyalty SMS Campaign",
        campaignType: "SMS",
        targetAudience: {
          ageGroup: "30-50",
          treatmentHistory: "Dental Cleaning",
          lastVisitDate: "2025-06-15",
        },
        messageTemplate: "Thanks for being with us! Enjoy a 10% discount.",
        scheduleDate: new Date("2025-07-12"),
        status: "Scheduled",
      },
      {
        campaignName: "Back-to-School In-App Promo",
        campaignType: "In-App Notification",
        targetAudience: {
          ageGroup: "18-30",
          treatmentHistory: "Whitening",
          lastVisitDate: "2025-05-20",
        },
        messageTemplate: "Get your smile ready for the semester!",
        scheduleDate: new Date("2025-07-15"),
        status: "In Progress",
        performanceMetrics: {
          openRate: 75.3,
          clickThroughRate: 45.1,
          conversionRate: 12.4,
        },
      },
      {
        campaignName: "Instagram Whitening Ad",
        campaignType: "Social Media",
        targetAudience: {
          ageGroup: "20-35",
          treatmentHistory: "Cosmetic Dentistry",
          lastVisitDate: "2025-04-10",
        },
        messageTemplate: "Brighten your smile this season!",
        scheduleDate: new Date("2025-07-08"),
        status: "Completed",
        performanceMetrics: {
          openRate: null,
          clickThroughRate: 62.7,
          conversionRate: 9.8,
        },
      },
    ]);

    console.log("Dummy data added successfully.");
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  }
}







module.exports = MarketingCRM;
module.exports.addDummyMarketingData = addDummyMarketingData;

  