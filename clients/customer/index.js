'use strict';

const io = require('socket.io-client');
const weebSocket = io.connect('http://localhost:3002/weeb');
const { createTicket } = require('./customer.js');
// const Chance = require('chance');

// const chance = new Chance();

weebSocket.emit('created', createTicket('Betty Crocker'));