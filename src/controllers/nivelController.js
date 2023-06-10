const nivelModel = require('../models/nivelModel');

const postNivel = (req, res) => {
    const nivel = nivelModel.postNivel(req.body);
    req.session.nivel = nivel;
    console.log("postando");
    res.status(201).send('Set Nivel in game');
}

const getNivel = (req, res) => {
    console.log("mostrando");
    console.log(req.session.nivel);
    const nivel = nivelModel.getNivel(req.session.nivel);
    console.log(nivel);
    res.status(200).json(nivel);
}

module.exports = { postNivel, getNivel }