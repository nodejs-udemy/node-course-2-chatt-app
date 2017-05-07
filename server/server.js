const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log(`New user connected`);

  socket.emit('newMessage', generateMessage('Admin','Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user connected'));

  socket.on('createMessage', (message) => {
    console.log(`createMessage: ${JSON.stringify(message)}`);
    socket.broadcast.emit('newMessage', generateMessage(message.from, message.text));
  });

  socket.on('disconnect', (socket) => {
    console.log('Client disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
