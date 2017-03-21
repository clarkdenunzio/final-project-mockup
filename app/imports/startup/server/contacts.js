import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactsSeeds = [
  {
    first: 'phil',
    last: 'johnson',
    address: '1608 east west rd',
    telephone: '123-456-7890',
    email: 'johnson@hawaii.edu',
  },
  {
    first: 'henri',
    last: 'cassanova',
    address: '1608 east west rd',
    telephone: '123-456-7890',
    email: 'henri@hawaii.edu',
  },
  {
    first: 'kim',
    last: 'bea',
    address: '1608 east west rd',
    telephone: '123-456-7890',
    email: 'bea@hawaii.edu',
  },
  {
    first: 'dave',
    last: 'chen',
    address: '1608 east west rd',
    telephone: '123-456-7890',
    email: 'chen@hawaii.edu',
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactsSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
