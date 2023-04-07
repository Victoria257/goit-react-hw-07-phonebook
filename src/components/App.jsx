import { Form } from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import FilterContacts from './FilterContacts/FilterContacts';

function App() {
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
