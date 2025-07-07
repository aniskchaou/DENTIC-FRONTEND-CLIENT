const {
    findAllConsultations,
    findConsultationById,
    createConsultation,
    updateConsultation,
    deleteConsultationById,
    deleteAllConsultations
} = require("../../services/consultation.services");

// Create a new consultation
exports.create = (req, res) => {
    if (!req.body.patientId || !req.body.doctorId) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createConsultation(req.body, res);
};

// Retrieve all consultations
exports.findAll = (req, res) => {
    findAllConsultations(null, res);
};

// Find a single consultation by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findConsultationById(id, res);
};

// Update a consultation by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateConsultation(id, req, res);
};

// Delete a consultation by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteConsultationById(id, res);
};

// Delete all consultations
exports.deleteAll = (req, res) => {
    deleteAllConsultations(res);
};