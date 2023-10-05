'use strict';

const Chance = require('chance');
const chance = new Chance();

function createTicket(custName) {
    return {
        custName: custName,
        orderId: chance.guid(),
        custEmail: chance.email(),
        custAdd: chance.address(),
        custAge: chance.age(),
        custSSN: chance.ssn(),
        custCoord: chance.coordinates(),
    }
}

module.exports = {
    createTicket
}