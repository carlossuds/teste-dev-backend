const neatCsv = require('neat-csv');

const fs = require('fs');

fs.readFile(__dirname.concat('/../assets/contacts.csv'), async (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const contacts = await neatCsv(data);

  console.log(contacts);
});
