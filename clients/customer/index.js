'use strict';

const io = require('socket.io-client');
const weebSocket = io.connect('http://localhost:3001/weeb');
const { createTicket } = require('./customer.js');
// const Chance = require('chance');

// const chance = new Chance();

weebSocket.on('connect', () => {
    const ticket = createTicket('Customer Name');
    weebSocket.emit('createTicket', ticket);
  });