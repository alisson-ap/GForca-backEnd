
module.exports = (socket) => {
    socket.on('sendMessage', (message) => {
        console.log(message);
    });
}