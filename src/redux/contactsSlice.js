import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    fetchfirst(state, action) {
      state.contacts.items = action.payload;
    },

    addContacts(state, action) {
      const contact = {
        id: nanoid(7),
        name: action.payload.newName,
        number: action.payload.newNumber,
      };

      const theSameName = state.contacts.items.find(
        prevContact => prevContact.name === contact.name
      );
      if (theSameName) {
        alert(`${contact.name} is already in contacts`);
      } else {
        state.contacts.items.push(contact);
      }
    },

    delContact(state, action) {
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.items.splice(index, 1);
    },
  },
});

export const { addContacts, delContact, fetchfirst } = contactsSlice.actions;

export default contactsSlice.reducer;
