const {
    findAllEmergencyHandlings,
    findEmergencyHandlingById,
    createEmergencyHandling,
    updateEmergencyHandling,
    deleteEmergencyHandlingById,
    deleteAllEmergencyHandlings,
    findAllEmergencyCases,
    findEmergencyCaseById,
    createEmergencyCase,
    updateEmergencyCase,
    deleteEmergencyCaseById,
    deleteAllEmergencyCases,
    findAllReferrals,
    findReferralById,
    createReferral,
    updateReferral,
    deleteReferralById,
    deleteAllReferrals
} = require("../../services/emergency.services");

// EmergencyHandling
exports.createHandling = (req, res) => {
    if (!req.body.patientId) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createEmergencyHandling(req.body, res);
};

exports.findAllHandlings = (req, res) => {
    findAllEmergencyHandlings(null, res);
};

exports.findHandling = (req, res) => {
    const id = req.params.id;
    findEmergencyHandlingById(id, res);
};

exports.updateHandling = (req, res) => {
    const id = req.params.id;
    updateEmergencyHandling(id, req, res);
};

exports.deleteHandling = (req, res) => {
    const id = req.params.id;
    deleteEmergencyHandlingById(id, res);
};

exports.deleteAllHandlings = (req, res) => {
    deleteAllEmergencyHandlings(res);
};

// EmergencyCase
exports.createCase = (req, res) => {
    if (!req.body.patientId) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createEmergencyCase(req.body, res);
};

exports.findAllCases = (req, res) => {
    findAllEmergencyCases(null, res);
};

exports.findCase = (req, res) => {
    const id = req.params.id;
    findEmergencyCaseById(id, res);
};

exports.updateCase = (req, res) => {
    const id = req.params.id;
    updateEmergencyCase(id, req, res);
};

exports.deleteCase = (req, res) => {
    const id = req.params.id;
    deleteEmergencyCaseById(id, res);
};

exports.deleteAllCases = (req, res) => {
    deleteAllEmergencyCases(res);
};

// Referral
exports.createReferral = (req, res) => {
    if (!req.body.patientId) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createReferral(req.body, res);
};

exports.findAllReferrals = (req, res) => {
    findAllReferrals(null, res);
};

exports.findReferral = (req, res) => {
    const id = req.params.id;
    findReferralById(id, res);
};

exports.updateReferral = (req, res) => {
    const id = req.params.id;
    updateReferral(id, req, res);
};

exports.deleteReferral = (req, res) => {
    const id = req.params.id;
    deleteReferralById(id, res);
};

exports.deleteAllReferrals = (req, res) => {
    deleteAllReferrals(res);
};