import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations"; 
import { selectContacts } from "redux/selectors";
import Notiflix from "notiflix";
import css from "../Form/Form.module.css"


export function Form() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

    function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error("There isn't such option");
    }
  };
  
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    const isExist = contacts.find(contact => { return contact.name === name })
    if (isExist) {
        setName('');
        setNumber('');
          return Notiflix.Notify.failure(`${name} is already in contacts...`, {timeout: 2000})
    };
    
    dispatch(addContact({name, number}));
    setName('');
    setNumber('');
    }
      
        return <form onSubmit={handleSubmit} className={css.form}>
        <label>
        <p>Name</p> <input
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required/> 
        </label>
        <label>
                <p>Number</p> <input
        value={number}
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required/>
        </label>
        <button type="submit">Add contact</button>
      </form>
    
}
