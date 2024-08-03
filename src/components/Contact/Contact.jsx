import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contacts/operations"

export default function Contact({contact:{name, number, id}}) {
    const dispatch = useDispatch()
    return(
            <>
                <div>
                    <p>Name {name}</p>
                    <p>Number {number}</p>
                </div>
                <button onClick={()=> dispatch(deleteContact(id))}>Delete</button>
            </>
    )
}