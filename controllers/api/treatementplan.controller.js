const {
    findAllTreatmentPlans,
    findTreatmentPlanById,
    createTreatmentPlan,
    updateTreatmentPlan,
    deleteTreatmentPlanById,
    deleteAllTreatmentPlans
} = require("../../services/treatementplan.services");

// Create a new treatment plan
exports.create = (req, res) => {
    if (!req.body.patientId || !req.body.planName) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createTreatmentPlan(req.body, res);
};

// Retrieve all treatment plans
exports.findAll = (req, res) => {
    findAllTreatmentPlans(null, res);
};

// Find a single treatment plan by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findTreatmentPlanById(id, res);
};

// Update a treatment plan by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateTreatmentPlan(id, req, res);
};

// Delete a treatment plan by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteTreatmentPlanById(id, res);
};

// Delete all treatment plans
exports.deleteAll = (req, res) => {
    deleteAllTreatmentPlans(res);
};