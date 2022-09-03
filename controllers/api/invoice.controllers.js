const { findInvoiceById, updateInvoice, deleteInvoiceById, deleteAllInvoices, findAllInvoices, createInvoice } = require("../../services/invoice.services");



exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user
    const patient = {
        namepatient: req.body.namepatient,
        emailpatient: req.body.emailpatient,
        birth: req.body.birth,
        telephone: req.body.telephone,
        gender: req.body.gender,
        address: req.body.address
    }

    createInvoice(patient, res)
};

exports.findAll = (req, res) => {

    findAllInvoices(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findInvoiceById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateInvoice(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteInvoiceById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllInvoices(req, res)
};