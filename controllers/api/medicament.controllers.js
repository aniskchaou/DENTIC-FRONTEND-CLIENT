const { getMedicamentByDate, getCount, findMedicamentById, updateMedicament, deleteMedicamentById, deleteAllMedicaments, findAllMedicaments, createMedicament } = require("../../services/medicamnt.services");



exports.getMedicamentByDate = (req, res) => {
    getMedicamentByDate(res)
}


exports.getCount = (req, res) => {
    getCount(req, res)
}

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
        name: req.body.name,
        producer: parseInt(req.body.company_name),
        group: parseInt(req.body.group_name),
        description: req.body.description
    }

    createMedicament(patient, res)
};

exports.findAll = (req, res) => {

    findAllMedicaments(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findMedicamentById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateMedicament(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteMedicamentById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllMedicaments(req, res)
};