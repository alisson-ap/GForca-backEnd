const app = require('./app');
const http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    transports: ['websocket', 'polling']
  }
});

io.on('connection', (socket) => {
  console.log(socket.id)

  require('./Events/match')(socket);
  require('./Events/versus')(socket);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = { io };