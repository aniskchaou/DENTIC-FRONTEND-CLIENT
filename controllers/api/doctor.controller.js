const {
    findAllDoctors,
    findDoctorById,
    createDoctor,
    updateDoctor,
    deleteDoctorById,
    deleteAllDoctors
} = require("../../services/doctor.services");

// Create a new doctor
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createDoctor(req.body, res);
};

// Retrieve all doctors (with optional filtering)
exports.findAll = (req, res) => {
    // You can add query-based filtering here if needed
    findAllDoctors(null, res);
};

// Find a single doctor by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findDoctorById(id, res);
};

// Update a doctor by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateDoctor(id, req, res);
};

// Delete a doctor by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteDoctorById(id, res);
};

// Delete all doctors
exports.deleteAll = (req, res) => {
    deleteAllDoctors(res);
};