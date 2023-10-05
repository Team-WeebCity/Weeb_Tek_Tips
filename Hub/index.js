'use strict';

// const io = require('socket.io-client');
const { Server } = require('socket.io');
// const socket = io('http://localhost:3001');

const PORT = process.env.PORT || 3001;
let server = new Server(PORT);
// let weeb = server.of('/weeb');
console.log('server on');

socket.on('connect', function() {
    console.log('Connected to server');

    //making the ticket
    socket.emit('createTicket', {id: 1, description: 'Test ticket'});
});

socket.on('newTicket', function(ticket) {
    console.log('New ticket received: ', ticket);
});