'use strict';

const io = require('socket.io-client');
const weebSocket = io.connect('http://localhost:3001/weeb');

function workerReceived(payload) {
    console.log('WORKER: Ticket Received! ' + payload.orderId);
    weebSocket.emit('in-progress', payload);

    setTimeout(() => {
        console.log('WORKER: Repair Complete! ' + payload.orderId);
        weebSocket.emit('complete', payload);
    }, 2000);
};

const curryRecieved = (socket) => (payload) => {
    console.log('WORKER: Ticket Received! ' + payload.orderId);
    weebSocket.emit('in-progress', payload);

    setTimeout(() => {
        console.log('WORKER: Repair Complete! ' + payload.orderId);
        weebSocket.emit('complete', payload);
    }, 2000);
};

module.exports = {
    workerReceived,
    curryRecieved
};