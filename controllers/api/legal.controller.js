const {
    findAllLegalCompliances,
    findLegalComplianceById,
    createLegalCompliance,
    updateLegalCompliance,
    deleteLegalComplianceById,
    deleteAllLegalCompliances
} = require("../../services/legal.services");

// Create a new legal compliance record
exports.create = (req, res) => {
    if (!req.body.patientId || !req.body.documentType) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createLegalCompliance(req.body, res);
};

// Retrieve all legal compliance records
exports.findAll = (req, res) => {
    findAllLegalCompliances(null, res);
};

// Find a single legal compliance record by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findLegalComplianceById(id, res);
};

// Update a legal compliance record by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateLegalCompliance(id, req, res);
};

// Delete a legal compliance record by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteLegalComplianceById(id, res);
};

// Delete all legal compliance records
exports.deleteAll = (req, res) => {
    deleteAllLegalCompliances(res);
};