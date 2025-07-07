const {
    findAllEquipment,
    findEquipmentById,
    createEquipment,
    updateEquipment,
    deleteEquipmentById,
    deleteAllEquipment
} = require("../../services/equipement.services");

// Create a new equipment maintenance record
exports.create = (req, res) => {
    if (!req.body.clinicId || !req.body.equipmentName) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createEquipment(req.body, res);
};

// Retrieve all equipment maintenance records
exports.findAll = (req, res) => {
    findAllEquipment(null, res);
};

// Find a single equipment maintenance record by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findEquipmentById(id, res);
};

// Update an equipment maintenance record by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateEquipment(id, req, res);
};

// Delete an equipment maintenance record by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteEquipmentById(id, res);
};

// Delete all equipment maintenance records
exports.deleteAll = (req, res) => {
    deleteAllEquipment(res);
};