const {
    findAllLoyaltyPrograms,
    findLoyaltyProgramById,
    createLoyaltyProgram,
    updateLoyaltyProgram,
    deleteLoyaltyProgramById,
    deleteAllLoyaltyPrograms
} = require("../../services/loyalty.services");

// Create a new loyalty program
exports.create = (req, res) => {
    if (!req.body.patientId) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createLoyaltyProgram(req.body, res);
};

// Retrieve all loyalty programs
exports.findAll = (req, res) => {
    findAllLoyaltyPrograms(null, res);
};

// Find a single loyalty program by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findLoyaltyProgramById(id, res);
};

// Update a loyalty program by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateLoyaltyProgram(id, req, res);
};

// Delete a loyalty program by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteLoyaltyProgramById(id, res);
};

// Delete all loyalty programs
exports.deleteAll = (req, res) => {
    deleteAllLoyaltyPrograms(res);
};