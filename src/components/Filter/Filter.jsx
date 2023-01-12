import { useDispatch } from "react-redux"
import { setFilter } from "redux/filterSlice"
import { nanoid } from "nanoid"
import css from "../Filter/Filter.module.css"

export const Filter = () => {
    const dispatch = useDispatch();
    return <div className={css.filter}>
        <p>Find contacts by name</p>
        <input type="text" onChange={e => dispatch(setFilter(e.currentTarget.value))} id={nanoid()} />
    </div>
}