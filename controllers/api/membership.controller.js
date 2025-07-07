const {
    findAllMemberships,
    findMembershipById,
    createMembership,
    updateMembership,
    deleteMembershipById,
    deleteAllMemberships
} = require("../../services/membership.services");

// Create a new dental membership
exports.create = (req, res) => {
    if (!req.body.patientId) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createMembership(req.body, res);
};

// Retrieve all dental memberships
exports.findAll = (req, res) => {
    findAllMemberships(null, res);
};

// Find a single dental membership by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findMembershipById(id, res);
};

// Update a dental membership by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateMembership(id, req, res);
};

// Delete a dental membership by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteMembershipById(id, res);
};

// Delete all dental memberships
exports.deleteAll = (req, res) => {
    deleteAllMemberships(res);
};