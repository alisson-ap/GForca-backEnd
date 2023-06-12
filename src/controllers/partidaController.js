const partidaModel = require('../models/partidaModel');

const postPartida = (partida) => {
    partidaModel.postPartida(partida);
}

const postPalavra = (word) =>{
    partidaModel.postPalavra(word);
}

const getPartida = (id) => {
    const partida = partidaModel.getPartidas(id);
    return partida;
}

const getPartidas = (req, res)=>{
    const partida = partidaModel.getPartidas(req.params.id);
    return res.status(200).json(partida);
}

module.exports = {
    postPartida,
    getPartida,
    postPalavra,
    getPartidas
}