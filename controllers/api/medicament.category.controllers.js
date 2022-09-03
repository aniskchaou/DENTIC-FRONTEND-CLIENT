const { findMedicamentCategoryById, updateMedicamentCategory, deleteMedicamentCategoryById, deleteAllMedicamentCategorys, findAllMedicamentCategorys, createMedicamentCategory } = require("../../services/medicament.category.services");



exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user
    const patient = {
        name: req.body.name
    }

    createMedicamentCategory(patient, res)
};

exports.findAll = (req, res) => {

    findAllMedicamentCategorys(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findMedicamentCategoryById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateMedicamentCategory(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteMedicamentCategoryById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllMedicamentCategorys(req, res)
};