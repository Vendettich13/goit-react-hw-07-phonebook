import { useEffect } from "react";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors"
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { ContactList } from "../ContactList/ContactList";
import { Form } from "../Form/Form";
import { Filter } from "../Filter/Filter";
import { DotLoader } from "react-spinners";

export function App() {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return <div style={{margin: "0 auto", display: "flex", alignItems: "center", width: "600px", flexDirection: "column", backgroundColor: "#eee6ef", padding: "20px 10px", borderRadius: "10px"}}>
  {error && <p style={{ fontSize: "25px", fontWeight: "600" }}>Something went wrong, please reload the page :(</p>}
  {!error && <p style={{fontSize: "35px", fontWeight: "700"}}>Phonebook</p>}
  {!error && <Form />}
  {!error && <p style={{fontSize: "35px", fontWeight: "700"}}>Contacts</p>}
  {isLoading && !error &&
    <DotLoader
      color="#fd7cf6"
      cssOverride={{
        display: 'block',
        margin: '0 auto',
      }}/>
  }
  {contacts.length !== 0 && <Filter/>}
  {contacts.length !== 0 && <ContactList />}
  {contacts.length === 0 && !error && <p style={{ marginTop: '15px', fontWeight: '500', fontSize: '20px' }}>Your contact list is empty</p>}
</div>
};
