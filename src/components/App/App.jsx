import { useEffect } from "react";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors"
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { ContactList } from "../ContactList/ContactList";
import { Form } from "../Form/Form";
import { Filter } from "../Filter/Filter";

export function App() {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return <div style={{margin: "0 auto", display: "flex", alignItems: "center", width: "700px", flexDirection: "column"}}>
    {isLoading && <p>Loading</p>}
    {error && <p>Something went wrong, please reload the page</p>}
  <p style={{fontSize: "35px", fontWeight: "700"}}>Phonebook</p>
    <Form />
  <p style={{fontSize: "35px", fontWeight: "700"}}>Contacts</p>
    {contacts.length !== 0 && <Filter/>}
    {contacts.length !== 0 ? <ContactList /> : <p style={{marginTop: '15px', fontWeight: '500', fontSize: '20px'}}>Your contact list is empty</p>}
</div>
};
