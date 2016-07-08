var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3030);

io.on('connection', function (socket) {
  console.log("Connected");
  socket.on('control', function (data) {
    console.log(data);
    io.emit('control', data)
  });
});
