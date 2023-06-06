const userModel = require('../models/userModel')

const userSession = (req, res) => {
    const id = userModel.getId(req.body);
    req.session.id = id;
    return res.status(201).send('Session Created');
};

module.exports = { userSession };