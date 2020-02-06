const csv2json = require('csv2json');

const csv = require('../assets/contacts.csv');

const json = csv2json(csv, { parseNumbers: true });

console.log(json);
