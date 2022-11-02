
const MedicamentCategory = require("../models/medicament.category.models");

exports.findAllMedicamentCategorys = (res) => {

    MedicamentCategory.findAll()
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

exports.createMedicamentCategory = (income, res) => {
    MedicamentCategory.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the MedicamentCategory."
            });
        });
}

exports.findMedicamentCategoryById = (id, res) => {
    MedicamentCategory.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving MedicamentCategory with id=" + id
            });
        });
}

exports.deleteMedicamentCategoryById = (id, res) => {
    MedicamentCategory.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "MedicamentCategory was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete MedicamentCategory with id=${id}. Maybe MedicamentCategory was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete MedicamentCategory with id=" + id
            });
        });
}

exports.updateMedicamentCategory = (id, req, res) => {
    MedicamentCategory.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "MedicamentCategory was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update MedicamentCategory with id=${id}. Maybe MedicamentCategory was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating MedicamentCategory with id=" + id
            });
        });
}

exports.deleteAllMedicamentCategorys = () => {
    MedicamentCategory.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} MedicamentCategory were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}