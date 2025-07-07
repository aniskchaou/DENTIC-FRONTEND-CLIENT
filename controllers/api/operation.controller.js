const {
    findAllOperations,
    findOperationById,
    createOperation,
    updateOperation,
    deleteOperationById,
    deleteAllOperations
} = require("../../services/operation.services");

// Create a new operation
exports.create = (req, res) => {
    if (!req.body.patientId || !req.body.operationType) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createOperation(req.body, res);
};

// Retrieve all operations
exports.findAll = (req, res) => {
    findAllOperations(null, res);
};

// Find a single operation by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findOperationById(id, res);
};

// Update an operation by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateOperation(id, req, res);
};

// Delete an operation by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteOperationById(id, res);
};

// Delete all operations
exports.deleteAll = (req, res) => {
    deleteAllOperations(res);
};