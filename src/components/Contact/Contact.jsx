import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contacts/operations"

export default function Contact({ contact:{name,number,id} }) {
    const dispatch = useDispatch()
    const handleDelete = () => dispatch(deleteContact(id));
    return(
            <>
                <div>
                    <p>Name {name}</p>
                    <p>Number {number}</p>
                </div>
                <button type="button" onClick={handleDelete}>Delete</button>
            </>
    )
}