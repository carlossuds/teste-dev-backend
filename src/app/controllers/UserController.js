import fs from 'fs';
import neatCsv from 'neat-csv';
import parseStringAsArray from '../../utils/parseStringAsArray';

import User from '../models/User';

class UserController {
  async store(req, res) {
    fs.readFile(
      __dirname.concat('/../../assets/contacts.csv'),
      async (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const contacts = await neatCsv(data, ['all']);

        const contactsArray = contacts.map(contact =>
          parseStringAsArray(contact.all)
        );

        console.log(contactsArray);

        const newContactsArray = [];

        contactsArray.forEach(contact => {
          const objContact = {
            name: contact[0],
            email: contact[1],
            phone: contact[2],
            subject: contact[3],
            message: contact[4],
          };

          newContactsArray.push(objContact);
        });

        const createdUsers = [];

        for (let n = 0; n < newContactsArray.length; n++) {
          const contact = newContactsArray[n];

          const userExists = await User.findOne({
            where: { email: contact.email },
          });

          if (userExists) {
            /* return res
              .status(400)
              .json({ error: `User <${contact.email}> already exists!` }); */
            continue;
          }

          try {
            const user = await User.create(contact);

            createdUsers.push(user);

            if (n === newContactsArray.length - 1) {
              return res.json(
                `${createdUsers.length} usuários criados com sucesso!`
              );
            }
          } catch (erro) {
            return res
              .status(401)
              .json({ error: `Error creating user: ${contact.email}` });
          }
        }
      }
    );
  }
}

export default new UserController();
