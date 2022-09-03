const { createCertificateTemplate, findAllCertificateTemplates, findCertificateTemplateById, updateCertificateTemplate, deleteAllCertificateTemplates } = require("../../services/certificate.template.services");


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
        content: req.body.content
    }

    createCertificateTemplate(patient, res)
};

exports.findAll = (req, res) => {
    findAllCertificateTemplates(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findCertificateTemplateById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateCertificateTemplate(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteCertificateTemplateById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllCertificateTemplates(req, res)
};