const {
    findAllProcedures,
    findProcedureById,
    createProcedure,
    updateProcedure,
    deleteProcedureById,
    deleteAllProcedures
} = require("../../services/procedure.services");

// Create a new procedure
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createProcedure(req.body, res);
};

// Retrieve all procedures
exports.findAll = (req, res) => {
    findAllProcedures(null, res);
};

// Find a single procedure by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findProcedureById(id, res);
};

// Update a procedure by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateProcedure(id, req, res);
};

// Delete a procedure by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteProcedureById(id, res);
};

// Delete all procedures
exports.deleteAll = (req, res) => {
    deleteAllProcedures(res);
};