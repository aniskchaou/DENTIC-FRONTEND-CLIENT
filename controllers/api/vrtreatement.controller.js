const {
    findAllVRTreatments,
    findVRTreatmentById,
    createVRTreatment,
    updateVRTreatment,
    deleteVRTreatmentById,
    deleteAllVRTreatments
} = require("../../services/vrtreatement.services");

// Create a new VR treatment simulation
exports.create = (req, res) => {
    if (!req.body.patientId || !req.body.simulationName) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createVRTreatment(req.body, res);
};

// Retrieve all VR treatment simulations
exports.findAll = (req, res) => {
    findAllVRTreatments(null, res);
};

// Find a single VR treatment simulation by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findVRTreatmentById(id, res);
};

// Update a VR treatment simulation by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateVRTreatment(id, req, res);
};

// Delete a VR treatment simulation by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteVRTreatmentById(id, res);
};

// Delete all VR treatment simulations
exports.deleteAll = (req, res) => {
    deleteAllVRTreatments(res);
};