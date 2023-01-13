import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import {MdContactPhone} from "react-icons/md"

export const ContactItem = ({ contact: { name, number, id }}) => {
const dispatch = useDispatch();
const handleDelete = () => dispatch(deleteContact(id))
    return <>
        <p><MdContactPhone style={{marginRight: "10px", color: 'rgb(177 6 211)'}}/> {name}  :  {number}</p>
        <button type="button" onClick={handleDelete}>Delete</button>
    </>
}