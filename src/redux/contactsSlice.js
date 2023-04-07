import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContacts(state, action) {
      console.log(action.payload);
      const contact = {
        id: nanoid(7),
        name: action.payload.newName,
        number: action.payload.newNumber,
      };

      const theSameName = state.contacts.find(
        prevContact => prevContact.name === contact.name
      );
      if (theSameName) {
        alert(`${contact.name} is already in contacts`);
      } else {
        state.contacts.push(contact);
      }
    },

    delContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContacts, delContact } = contactsSlice.actions;

export default contactsSlice.reducer;
