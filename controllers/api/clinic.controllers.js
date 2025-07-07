const {
    findAllClinics,
    findClinicById,
    createClinic,
    updateClinic,
    deleteClinicById,
    deleteAllClinics
} = require("../../services/clinic.srrvices");

// Create a new clinic
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createClinic(req.body, res);
};

// Retrieve all clinics (with optional filtering)
exports.findAll = (req, res) => {
    // You can add query-based filtering here if needed
    findAllClinics(null, res);
};

// Find a single clinic by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findClinicById(id, res);
};

// Update a clinic by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateClinic(id, req, res);
};

// Delete a clinic by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteClinicById(id, res);
};

// Delete all clinics
exports.deleteAll = (req, res) => {
    deleteAllClinics(res);
};