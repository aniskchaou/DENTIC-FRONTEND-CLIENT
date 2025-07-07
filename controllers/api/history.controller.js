const {
    deleteHistoryById,
    deleteAllHistories
} = require("../../services/history.services");

// Delete a history record by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteHistoryById(id, res);
};

// Delete all history records
exports.deleteAll = (req, res) => {
    deleteAllHistories(res);
};