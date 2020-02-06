const csv = require('csvtojson');

const convertedCSV = csv()
  .fromFile('../assets/contacts.csv')
  .then(contact => console.log(contact));

exports.convertedCSV = convertedCSV;
