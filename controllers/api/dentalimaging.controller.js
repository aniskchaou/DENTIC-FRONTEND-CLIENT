const {
    findAllDentalImaging,
    findDentalImagingById,
    createDentalImaging,
    updateDentalImaging,
    deleteDentalImagingById,
    deleteAllDentalImaging
} = require("../../services/dentalimaging.services");

// Create a new dental imaging record
exports.create = (req, res) => {
    if (!req.body.patientId || !req.body.imageUrl) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createDentalImaging(req.body, res);
};

// Retrieve all dental imaging records
exports.findAll = (req, res) => {
    findAllDentalImaging(null, res);
};

// Find a single dental imaging record by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findDentalImagingById(id, res);
};

// Update a dental imaging record by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateDentalImaging(id, req, res);
};

// Delete a dental imaging record by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteDentalImagingById(id, res);
};

// Delete all dental imaging records
exports.deleteAll = (req, res) => {
    deleteAllDentalImaging(res);
};