const { filterService, deleteServiceById, createService, findAllServices, findServiceById, updateService, deleteAllServices } = require("../../services/service.services");

exports.filterService = (req, res) => {
    const patient = req.params.patient;
    const template = req.params.template;
    filterService(patient, template, req, res)
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
        description: req.body.description,
        status: req.body.status
    }

    createService(patient, res)
};

exports.findAll = (req, res) => {
    findAllServices(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findServiceById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateService(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteServiceById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllServices(res)
};