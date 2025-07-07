const {
    findAllStaff,
    findStaffById,
    createStaff,
    updateStaff,
    deleteStaffById,
    deleteAllStaff
} = require("../../services/staff.services");

// Create a new staff member
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createStaff(req.body, res);
};

// Retrieve all staff members
exports.findAll = (req, res) => {
    findAllStaff(null, res);
};

// Find a single staff member by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findStaffById(id, res);
};

// Update a staff member by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateStaff(id, req, res);
};

// Delete a staff member by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteStaffById(id, res);
};

// Delete all staff members
exports.deleteAll = (req, res) => {
    deleteAllStaff(res);
};