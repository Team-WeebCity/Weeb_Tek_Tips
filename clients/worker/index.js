'use strict'

const io = require('socket.io-client');
const weebSocket = io.connect('http://localhost:3001/weeb');
const { curryReceived } = require('./worker.js');
weebSocket.on('pickup', curryReceived(weebSocket));
weebSocket.on('join', (payload) => {
  console.log('You have joined the room!', payload);
});

