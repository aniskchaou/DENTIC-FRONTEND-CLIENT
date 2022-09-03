
const Medicament = require("../models/medicament.models");

exports.findAllMedicaments = (res) => {

    Medicament.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}

exports.createMedicament = (medicament, res) => {
    console.log(medicament)
    Medicament.create(medicament)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Medicament."
            });
        });
}

exports.findMedicamentById = (id) => {
    Medicament.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Medicament with id=" + id
            });
        });
}

exports.deleteMedicamentById = (id, res) => {
    Medicament.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Medicament was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Medicament with id=${id}. Maybe Medicament was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Medicament with id=" + id
            });
        });
}

exports.updateMedicament = (id, req, res) => {
    Medicament.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Medicament was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Medicament with id=${id}. Maybe Medicament was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Medicament with id=" + id
            });
        });
}

exports.deleteAllMedicaments = () => {
    Medicament.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Medicament were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}