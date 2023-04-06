import { Form } from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import FilterContacts from './FilterContacts/FilterContacts';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';

function App() {
  const dispatch = useDispatch();

  const formSubmitHandler = data => {
    dispatch(addContacts(data));
  };

  return (
    <div>
      <Form onSubmit={formSubmitHandler} addContacts={addContacts} />
      <ContactList>
        <FilterContacts />
      </ContactList>
    </div>
  );
}

export default App;

App.propTypes = {
  formSubmitHandler: PropTypes.func,
};
