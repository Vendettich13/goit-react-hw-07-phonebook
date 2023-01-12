import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";

export const ContactItem = ({ contact: { name, number, id }}) => {
const dispatch = useDispatch();
const handleDelete = () => dispatch(deleteContact(id))
    return <>
        <p>{name} : {number}</p>
        <button type="button" onClick={handleDelete}>Delete</button>
    </>
}