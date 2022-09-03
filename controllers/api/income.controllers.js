const { findIncomeById, updateIncome, deleteIncomeById, deleteAllIncomes, findAllIncomes, createIncome } = require("../../services/income.services");



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

    createIncome(patient, res)
};

exports.findAll = (req, res) => {

    findAllIncomes(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findIncomeById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateIncome(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteIncomeById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllIncomes(req, res)
};