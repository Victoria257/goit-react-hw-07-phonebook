import { Form } from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import FilterContacts from './FilterContacts/FilterContacts';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Form />
      <ContactList>
        <FilterContacts />
      </ContactList>
    </div>
  );
}

export default App;
