const {
    findAllTelemedicine,
    findTelemedicineById,
    createTelemedicine,
    updateTelemedicine,
    deleteTelemedicineById,
    deleteAllTelemedicine
} = require("../../services/telemedicine.services");

// Create a new telemedicine session
exports.create = (req, res) => {
    if (!req.body.patientId || !req.body.sessionDate) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createTelemedicine(req.body, res);
};

// Retrieve all telemedicine sessions
exports.findAll = (req, res) => {
    findAllTelemedicine(null, res);
};

// Find a single telemedicine session by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findTelemedicineById(id, res);
};

// Update a telemedicine session by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateTelemedicine(id, req, res);
};

// Delete a telemedicine session by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteTelemedicineById(id, res);
};

// Delete all telemedicine sessions
exports.deleteAll = (req, res) => {
    deleteAllTelemedicine(res);
};