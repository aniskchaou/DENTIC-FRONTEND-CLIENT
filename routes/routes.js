const express = require("express");
const router = express.Router();

// Controllers
// User & Patient
const userController = require("../controllers/api/user.controllers");
const patientController = require("../controllers/api/patient.controllers");

// Clinic & Staff
const clinicController = require("../controllers/api/clinic.controllers");
const staffController = require("../controllers/api/staff.controller");
const staffScheduleController = require("../controllers/api/staff.controller");

// Doctors
const doctorController = require("../controllers/api/doctor.controller");
//const doctorScheduleController = require("../controllers/api/doctorschedule.controller");
//const doctorAvailabilityController = require("../controllers/api/doctoravailability.controller");

// Appointments & Consultations
const appointementController = require("../controllers/api/appointement.controllers");
const consultationController = require("../controllers/api/consultation.controllers");
//const consultationScheduleController = require("../controllers/api/consultationschedule.controller");
//const consultationHistoryController = require("../controllers/api/consultationhistory.controller");

// Diagnostics & Imaging
const diagnosticController = require("../controllers/api/diagnosis.controller");
const dentalimagingController = require("../controllers/api/dentalimaging.controller");

// Treatment & Procedures
const treatmentPlanController = require("../controllers/api/treatementplan.controller");
const vrTreatmentController = require("../controllers/api/vrtreatement.controller");
const procedureController = require("../controllers/api/procedure.controller");
const operationController = require("../controllers/api/operation.controller");
const medicationController = require("../controllers/api/medication.controller");

// Emergency
/*
const emergencyHandlingController = require("../controllers/api/emergencyhandling.controller");
const emergencyCaseController = require("../controllers/api/emergencycase.controller");
const emergencyReferralController = require("../controllers/api/emergencyreferral.controller");

const emergencyCaseHistoryController = require("../controllers/api/emergencycasehistory.controller");
const emergencyReferralHistoryController = require("../controllers/api/emergencyreferralhistory.controller");
const emergencyHandlingHistoryController = require("../controllers/api/emergencyhandlinghistory.controller");

const emergencyCaseReferralController = require("../controllers/api/emergencycasereferral.controller");
const emergencyCaseHandlingController = require("../controllers/api/emergencycasehandling.controller");
const emergencyReferralHandlingController = require("../controllers/api/emergencyreferralhandling.controller");

const emergencyCaseReferralHistoryController = require("../controllers/api/emergencycasereferralhistory.controller");
const emergencyCaseHandlingHistoryController = require("../controllers/api/emergencycasehandlinghistory.controller");
*/

// Insurance & Membership
const insuranceController = require("../controllers/api/insurance.controller");
const membershipController = require("../controllers/api/membership.controller");

// Records & History
const historyController = require("../controllers/api/history.controller");
//const medicalRecordController = require("../controllers/api/medicalrecord.controller");

// Miscellaneous
const equipementController = require("../controllers/api/equipement.controller");
const casestudyController = require("../controllers/api/casestudy.controller");
const legalController = require("../controllers/api/legal.controller");
const loyaltyController = require("../controllers/api/loyalty.controller");
const marketingController = require("../controllers/api/marketing.controller");
const treatementplanController = require("../controllers/api/treatementplan.controller");
const vrtreatementController = require("../controllers/api/vrtreatement.controller");


// Staff Schedule routes
router.post("/staffschedule", staffScheduleController.create);   
router.get("/staffschedule", staffScheduleController.findAll);
router.get("/staffschedule/:id", staffScheduleController.findOne);
router.put("/staffschedule/:id", staffScheduleController.update);   
router.delete("/staffschedule/:id", staffScheduleController.delete);
router.delete("/staffschedule", staffScheduleController.deleteAll);

// patient routes
router.post("/patients", patientController.create);
router.get("/patients", patientController.findAll);
router.get("/patients/:id", patientController.findOne);
router.put("/patients/:id", patientController.update);
router.delete("/patients/:id", patientController.delete);
router.delete("/patients", patientController.deleteAll);

// Emergency routes
const emergencyController = require("../controllers/api/emergency.controller");

// User routes
router.post("/users", userController.create);
router.get("/users", userController.findAll);
router.get("/users/:id", userController.findOne);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);
router.delete("/users", userController.deleteAll);
router.post("/api/user/login", userController.login);

// Appointment/Event routes
router.get("/appointments/count", appointementController.getCount);
router.post("/appointments", appointementController.createAppointement);
router.post("/events", appointementController.create);
router.get("/events", appointementController.findAll);
router.get("/events/:id", appointementController.findOne);
router.put("/events/:id", appointementController.update);
router.delete("/events/:id", appointementController.delete);
router.delete("/events", appointementController.deleteAll);

// Clinic routes
router.post("/clinics", clinicController.create);
router.get("/clinics", clinicController.findAll);
router.get("/clinics/:id", clinicController.findOne);
router.put("/clinics/:id", clinicController.update);
router.delete("/clinics/:id", clinicController.delete);
router.delete("/clinics", clinicController.deleteAll);

// Doctor routes
router.post("/doctors", doctorController.create);
router.get("/doctors", doctorController.findAll);
router.get("/doctors/:id", doctorController.findOne);
router.put("/doctors/:id", doctorController.update);
router.delete("/doctors/:id", doctorController.delete);
router.delete("/doctors", doctorController.deleteAll);

// Staff routes
router.post("/staff", staffController.create);
router.get("/staff", staffController.findAll);
router.get("/staff/:id", staffController.findOne);
router.put("/staff/:id", staffController.update);
router.delete("/staff/:id", staffController.delete);
router.delete("/staff", staffController.deleteAll);

// Equipment routes
router.post("/equipments", equipementController.create);
router.get("/equipments", equipementController.findAll);
router.get("/equipments/:id", equipementController.findOne);
router.put("/equipments/:id", equipementController.update);
router.delete("/equipments/:id", equipementController.delete);
router.delete("/equipments", equipementController.deleteAll);

// Consultation routes
router.post("/consultations", consultationController.create);
router.get("/consultations", consultationController.findAll);
router.get("/consultations/:id", consultationController.findOne);
router.put("/consultations/:id", consultationController.update);
router.delete("/consultations/:id", consultationController.delete);
router.delete("/consultations", consultationController.deleteAll);

// Diagnostic routes
router.post("/diagnostics", diagnosticController.create);
router.get("/diagnostics", diagnosticController.findAll);
router.get("/diagnostics/:id", diagnosticController.findOne);
router.put("/diagnostics/:id", diagnosticController.update);
router.delete("/diagnostics/:id", diagnosticController.delete);
router.delete("/diagnostics", diagnosticController.deleteAll);

// Medication routes
router.post("/medications", medicationController.create);
router.get("/medications", medicationController.findAll);
router.get("/medications/:id", medicationController.findOne);
router.put("/medications/:id", medicationController.update);
router.delete("/medications/:id", medicationController.delete);
router.delete("/medications", medicationController.deleteAll);

// Procedure routes
router.post("/procedures", procedureController.create);
router.get("/procedures", procedureController.findAll);
router.get("/procedures/:id", procedureController.findOne);
router.put("/procedures/:id", procedureController.update);
router.delete("/procedures/:id", procedureController.delete);
router.delete("/procedures", procedureController.deleteAll);

// Operation routes
router.post("/operations", operationController.create);
router.get("/operations", operationController.findAll);
router.get("/operations/:id", operationController.findOne);
router.put("/operations/:id", operationController.update);
router.delete("/operations/:id", operationController.delete);
router.delete("/operations", operationController.deleteAll);

// Treatment Plan routes
router.post("/treatmentplans", treatementplanController.create);
router.get("/treatmentplans", treatementplanController.findAll);
router.get("/treatmentplans/:id", treatementplanController.findOne);
router.put("/treatmentplans/:id", treatementplanController.update);
router.delete("/treatmentplans/:id", treatementplanController.delete);
router.delete("/treatmentplans", treatementplanController.deleteAll);

// VR Treatment routes
router.post("/vrtreatments", vrtreatementController.create);
router.get("/vrtreatments", vrtreatementController.findAll);
router.get("/vrtreatments/:id", vrtreatementController.findOne);
router.put("/vrtreatments/:id", vrtreatementController.update);
router.delete("/vrtreatments/:id", vrtreatementController.delete);
router.delete("/vrtreatments", vrtreatementController.deleteAll);

// Dental Imaging routes
router.post("/dentalimaging", dentalimagingController.create);
router.get("/dentalimaging", dentalimagingController.findAll);
router.get("/dentalimaging/:id", dentalimagingController.findOne);
router.put("/dentalimaging/:id", dentalimagingController.update);
router.delete("/dentalimaging/:id", dentalimagingController.delete);
router.delete("/dentalimaging", dentalimagingController.deleteAll);

// Insurance routes
router.post("/insurances", insuranceController.create);
router.get("/insurances", insuranceController.findAll);
router.get("/insurances/:id", insuranceController.findOne);
router.put("/insurances/:id", insuranceController.update);
router.delete("/insurances/:id", insuranceController.delete);
router.delete("/insurances", insuranceController.deleteAll);

// Membership routes
router.post("/memberships", membershipController.create);
router.get("/memberships", membershipController.findAll);
router.get("/memberships/:id", membershipController.findOne);
router.put("/memberships/:id", membershipController.update);
router.delete("/memberships/:id", membershipController.delete);
router.delete("/memberships", membershipController.deleteAll);

// Case Study routes
router.post("/casestudies", casestudyController.create);
router.get("/casestudies", casestudyController.findAll);
router.get("/casestudies/:id", casestudyController.findOne);
router.put("/casestudies/:id", casestudyController.update);
router.delete("/casestudies/:id", casestudyController.delete);
router.delete("/casestudies", casestudyController.deleteAll);

// Legal Compliance routes
router.post("/legal", legalController.create);
router.get("/legal", legalController.findAll);
router.get("/legal/:id", legalController.findOne);
router.put("/legal/:id", legalController.update);
router.delete("/legal/:id", legalController.delete);
router.delete("/legal", legalController.deleteAll);

// Loyalty Program routes
router.post("/loyalty", loyaltyController.create);
router.get("/loyalty", loyaltyController.findAll);
router.get("/loyalty/:id", loyaltyController.findOne);
router.put("/loyalty/:id", loyaltyController.update);
router.delete("/loyalty/:id", loyaltyController.delete);
router.delete("/loyalty", loyaltyController.deleteAll);

// Marketing Campaign routes
router.post("/marketing", marketingController.create);
router.get("/marketing", marketingController.findAll);
router.get("/marketing/:id", marketingController.findOne);
router.put("/marketing/:id", marketingController.update);
router.delete("/marketing/:id", marketingController.delete);
router.delete("/marketing", marketingController.deleteAll);

// History routes
router.delete("/history/:id", historyController.delete);
router.delete("/history", historyController.deleteAll);

// Emergency routes
router.post("/emergency/handling", emergencyController.createHandling);
router.get("/emergency/handling", emergencyController.findAllHandlings);
router.get("/emergency/handling/:id", emergencyController.findHandling);
router.put("/emergency/handling/:id", emergencyController.updateHandling);
router.delete("/emergency/handling/:id", emergencyController.deleteHandling);
router.delete("/emergency/handling", emergencyController.deleteAllHandlings);

router.post("/emergency/case", emergencyController.createCase);
router.get("/emergency/case", emergencyController.findAllCases);
router.get("/emergency/case/:id", emergencyController.findCase);
router.put("/emergency/case/:id", emergencyController.updateCase);
router.delete("/emergency/case/:id", emergencyController.deleteCase);
router.delete("/emergency/case", emergencyController.deleteAllCases);

router.post("/emergency/referral", emergencyController.createReferral);
router.get("/emergency/referral", emergencyController.findAllReferrals);
router.get("/emergency/referral/:id", emergencyController.findReferral);
router.put("/emergency/referral/:id", emergencyController.updateReferral);
router.delete("/emergency/referral/:id", emergencyController.deleteReferral);
router.delete("/emergency/referral", emergencyController.deleteAllReferrals);

module.exports = router;