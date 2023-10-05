'use strict';

const io = require('socket.io-client');
const { Server } = require('socket.io');
const socket = io('http://localhost:3001');

const PORT = process.env.PORT || 3001;
let server = new Server(PORT);
let weeb = server.of('/weeb');
console.log('server on');

weeb.on('connect', function() {
    console.log('Connected to server');

    socket.on('create', (payload) => {
        console.log('Ticket has been created.', payload);
        socket.broadcast.to(payload.name).emit('create', payload);
      });
});

