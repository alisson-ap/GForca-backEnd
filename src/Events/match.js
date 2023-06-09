const partidaController = require('../controllers/partidaController');

const rooms = [];

const createRoom = (nivel) => {
    const room = {
        id: Math.random().toString(36).substring(7),
        sockets: [],
        nivelRoom: nivel,
        player1: {},
        player2: {}
    };
    rooms.push(room);
    return room;
};

const joinRoom = (room, socket, userId) => {
    room.sockets.push(socket.id);
    socket.join(room.id);
    console.log(`Usuário ${socket.id} entrou na sala ${room.id}.`);

    if (room.sockets.length === 1) {
        room.player1 = { id: userId, pronto: false };

        socket.emit('player1', (userId));

    } else if (room.sockets.length === 2) {
        room.player2 = { id: userId, pronto: false };
        socket.emit('player2', (userId));

        const newRoom = createRoom();
    }
}

function changeReadyState(room, readyState) {
    if (readyState) {
        if (room.player1.pronto) {
            room.player1.pronto = false;
        } else {
            room.player1.pronto = true;
        }
    } else {
        if (room.player2.pronto) {
            room.player2.pronto = false;
        } else {
            room.player2.pronto = true;
        }
    }
}

function checkPlayersReady(room) {
    if (room.player1.pronto && room.player2.pronto) {
        return true;
    }
    return false;
}

module.exports = (socket) => {
    socket.on('create-room', (player) => {
        const { userId, nivel } = player;
        const avaibleRoom = rooms.find((r) => r.sockets.length < 2 && nivel == r.nivelRoom);
        if (avaibleRoom) {
            joinRoom(avaibleRoom, socket, userId);
            console.log(rooms);

        } else {
            const newRoom = createRoom(nivel);
            joinRoom(newRoom, socket, userId);
        }
    });

    socket.on('ready', (player) => {

        const room = rooms.find((room) => room.sockets.includes(player.socketId) || room.sockets.includes(player.socketId));

        changeReadyState(room, player.player);

        if (checkPlayersReady(room)) {
            partidaController.postPartida(room);
            socket.to(room.id).emit('checkReady', (player));
            socket.to(room.id).emit("redirect", (room.id));
            socket.emit("redirect", (room.id));

        } else {
            console.log("está pronto o outro player");
            socket.to(room.id).emit('checkReady', (player));
        }
    });

    socket.on("words", (word) => {
        partidaController.postPalavra(word);
    });

    socket.on('disconnect', () => {
        console.log('Um usuário desconectou.');
        const room = rooms.find((r) => r.sockets.includes(socket.id));
        if (room) {
            room.sockets = room.sockets.filter((sid) => sid !== socket.id);
            socket.leave(room.id);
        }
    });
}

