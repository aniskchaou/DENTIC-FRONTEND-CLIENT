const { findTodoById, updateTodo, deleteTodoById, deleteAllTodos, findAllTodos, createTodo } = require("../../services/todo.services");



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

    createTodo(patient, res)
};

exports.findAll = (req, res) => {

    findAllTodos(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findTodoById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateTodo(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteTodoById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllTodos(req, res)
};