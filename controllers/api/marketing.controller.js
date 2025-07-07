const {
    findAllMarketingCampaigns,
    findMarketingCampaignById,
    createMarketingCampaign,
    updateMarketingCampaign,
    deleteMarketingCampaignById,
    deleteAllMarketingCampaigns
} = require("../../services/marketing.services");

// Create a new marketing campaign
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    createMarketingCampaign(req.body, res);
};

// Retrieve all marketing campaigns
exports.findAll = (req, res) => {
    findAllMarketingCampaigns(null, res);
};

// Find a single marketing campaign by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    findMarketingCampaignById(id, res);
};

// Update a marketing campaign by ID
exports.update = (req, res) => {
    const id = req.params.id;
    updateMarketingCampaign(id, req, res);
};

// Delete a marketing campaign by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    deleteMarketingCampaignById(id, res);
};

// Delete all marketing campaigns
exports.deleteAll = (req, res) => {
    deleteAllMarketingCampaigns(res);
};