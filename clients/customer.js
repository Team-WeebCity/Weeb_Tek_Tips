'use strict';

const Chance = require('chance');
const chance = new Chance();

function createTicket(custName) {
    return {
        custName: custName,
        custAdd: chance.address(),
        orderId: chance.guid(),

    }
}