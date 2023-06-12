const partidaController = require("../controllers/partidaController");


module.exports = (socket) => {

    socket.on("takeRoom", (room) => {
        socket.join(room);
        const partida = partidaController.getPartida(room);
        partida.sockets.push(socket.id);

        socket.emit("retornoPartida", (partida));
    });

    socket.on("attemptsP", (player) => {
        socket.to(player.roomId).emit("decrement",(player.player));
    });

    socket.on("right",(player)=>{
        socket.to(player.roomId).emit("correct",(player.player));
    });

    socket.on("increment", (player)=>{
        socket.to(player.roomId).emit("incrementLife", (player.player));
    })

    socket.on("victory",(player)=>{
        socket.to(player.roomId).emit("loser", (player,player));
    })

    socket.on("defeat", (player)=>{
        socket.to(player.roomId).emit("winner", (player,player));
    })

}