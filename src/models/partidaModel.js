const partidas = [];

const postPartida = (players) => {
    partidas.push(players);
}

const getPartidas = (id) => {
    const partida = partidas.find(partida => partida.id === id || partida.id === id);
    return partida;
}

const postPalavra = (word) =>{
    const partida = partidas.find(partida => partida.id === word.roomId || partida.id === word.roomId);
    partida.randomWord =  word.randomWord;
}   

module.exports = {
    postPartida,
    getPartidas,
    postPalavra
}