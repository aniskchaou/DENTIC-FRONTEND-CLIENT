const {
    findAllDiagnoses,
    findDiagnosisById,
    createDiagnosis,
    updateDiagnosis,
    deleteDiagnosisById,
    deleteAllDiagnoses
} = require("../../services/diagnostic.services");

// Create a new diagnosis
exports.create = (req, res) => {
    if (!req.body.patientId || !req.body.doctorId) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createDiagnosis(req.body, res);
};

// Retrieve all diagnoses
exports.findAll = (req, res) => {
    findAllDiagnoses(null, res);
};

// Find a single diagnosis by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findDiagnosisById(id, res);
};

// Update a diagnosis by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateDiagnosis(id, req, res);
};

// Delete a diagnosis by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteDiagnosisById(id, res);
};

// Delete all diagnoses
exports.deleteAll = (req, res) => {
    deleteAllDiagnoses(res);
};