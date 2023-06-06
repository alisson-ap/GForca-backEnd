const nivelModel = require('../models/nivelModel');

const getNivel = (req, res) => {
    const nivel = nivelModel.getNivel(req.body);
    req.session.nivel = nivel;
    res.status(201).send('Set Nivel in game'); 
}

module.exports = {getNivel}