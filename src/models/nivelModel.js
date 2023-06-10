const postNivel = (nivel) => {
    console.log(nivel);
    const { nivelUser } = nivel;
    return nivelUser;
}

const getNivel = (nivel)=>{
    const data = {
        nivelRoom: nivel,
    }
    return data;
}

module.exports = {postNivel, getNivel}