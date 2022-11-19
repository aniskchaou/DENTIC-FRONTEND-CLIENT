const { deletePrescriptionMedicamentById, findAllMedicamentPrescriptions, createMedicamentPrescription, findPrescriptionById, updatePrescription, deletePrescriptionById, deleteAllPrescriptions, findAllPrescriptions, createPrescription } = require("../../services/prescription.services");

exports.createMedicamentItem = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user
    const patient = {
        dose: req.body.dose,
        medicament: req.body.medicament,
        duration: req.body.duration,
        prescription: req.body.prescription

    }
    console.log(patient)

    createMedicamentPrescription(patient, res)
};



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
        patient: req.body.patient,
        pression: req.body.pression,
        temperature: req.body.temperature,
        problem: req.body.problem,
        note: req.body.note,

    }

    createPrescription(patient, res)
};

exports.findAll = (req, res) => {

    findAllPrescriptions(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findPrescriptionById(id, res)
};

exports.findAllMedicamentPrescriptions = (req, res) => {
    const id = req.params.id;
    findAllMedicamentPrescriptions(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updatePrescription(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deletePrescriptionById(id, res)
};

exports.deleteMedicament = (req, res) => {
    const id = req.params.id;
    deletePrescriptionMedicamentById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllPrescriptions(req, res)
};