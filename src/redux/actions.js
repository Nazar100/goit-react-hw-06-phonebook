import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContacts = createAction('contacts/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

const contactsActions = { addContacts, deleteContact, changeFilter };

export default contactsActions;
