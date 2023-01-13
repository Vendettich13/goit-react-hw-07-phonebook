import { useSelector } from "react-redux";
import { visibleContacts } from "redux/selectors";
import { ContactItem } from "components/ContactItem/ContactItem"
import css from "../ContactList/ContactList.module.css"

export const ContactList = () => {
  const contacts = useSelector(visibleContacts);
    
  return <ul className={css.list}>
        {contacts.map(contact => {
            return <li key={contact.id}><ContactItem contact={contact} /></li>
        })}
    </ul>
}

