const {
    findAllInsurances,
    findInsuranceById,
    createInsurance,
    updateInsurance,
    deleteInsuranceById,
    deleteAllInsurances
} = require("../../services/insurance.services");

// Create a new insurance record
exports.create = (req, res) => {
    if (!req.body.patientId || !req.body.providerName) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createInsurance(req.body, res);
};

// Retrieve all insurance records
exports.findAll = (req, res) => {
    findAllInsurances(null, res);
};

// Find a single insurance record by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findInsuranceById(id, res);
};

// Update an insurance record by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateInsurance(id, req, res);
};

// Delete an insurance record by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteInsuranceById(id, res);
};

// Delete all insurance records
exports.deleteAll = (req, res) => {
    deleteAllInsurances(res);
};