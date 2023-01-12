import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { ContactItem } from "components/ContactItem/ContactItem"
import css from "../ContactList/ContactList.module.css"

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizedFilter)
    );
  };

    const visibleContacts = getFilteredContacts();
    
  return <ul className={css.list}>
        {visibleContacts.map(contact => {
            return <li key={contact.id}><ContactItem contact={contact} /></li>
        })}
    </ul>
}

