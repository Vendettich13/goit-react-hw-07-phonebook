import { ContactList } from "../ContactList/ContactList";
import { Form } from "../Form/Form";
import { Filter } from "../Filter/Filter";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";

export function App() {
  const contacts = useSelector(getContacts);

  return <div>
  <h1>Phonebook</h1>
    <Form />
  <h2>Contacts</h2>
    {contacts.length !== 0 && <Filter/>}
    {contacts.length !== 0 ? <ContactList /> : <p style={{marginTop: '15px', fontWeight: '500', fontSize: '20px'}}>Your contact list is empty</p>}
</div>
};
