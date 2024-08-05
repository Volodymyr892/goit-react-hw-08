import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contacts/operations"
import css from "./Contact.module.css"

export default function Contact({ contact:{name,number,id} }) {
    const dispatch = useDispatch()
    const handleDelete = () => dispatch(deleteContact(id));
    return(
            <div className={css.contact}>
                <div>
                    <p className={css.name}> {name}</p>
                    <p> {number}</p>
                </div>
                <button type="button" onClick={handleDelete}>Delete</button>
            </div>
    )
}