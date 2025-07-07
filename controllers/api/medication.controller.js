const {
    findAllMedications,
    findMedicationById,
    createMedication,
    updateMedication,
    deleteMedicationById,
    deleteAllMedications
} = require("../../services/medication.services");

// Create a new medication
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createMedication(req.body, res);
};

// Retrieve all medications
exports.findAll = (req, res) => {
    findAllMedications(null, res);
};

// Find a single medication by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findMedicationById(id, res);
};

// Update a medication by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateMedication(id, req, res);
};

// Delete a medication by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteMedicationById(id, res);
};

// Delete all medications
exports.deleteAll = (req, res) => {
    deleteAllMedications(res);
};