
const { loginUser, findAll, findAllUsers, createUser, findUserById, deleteUserById, updateUser, deleteAllUsers } = require("../../services/user.services");

exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user
    const user = {
        username: req.body.username,
        birthday: req.body.birthday
    }
    createUser(user)
};

exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;
    findAllUsers(condition)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findUserById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateUser(id, req)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteUserById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllUsers(res)
};

exports.login = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const user = {
        username: req.body.username,
        password: req.body.password,

    }

    loginUser(user.username, user.password, res)
};