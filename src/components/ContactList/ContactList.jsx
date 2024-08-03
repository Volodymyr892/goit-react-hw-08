import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contacts/selectors";
// import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contacts/operations";


export default function ContactList() {
//     const dispatch = useDispatch()
//     useEffect (()=>{
//         dispatch(fetchContacts())
//    },[dispatch])
    const contacts = useSelector(selectContacts);
    return (
        <ul>
            {contacts.map( (contact) => (

            <li key={contact.id}>
                <Contact contact={contact}/>
            </li>
            ))}

        </ul>     
    )
}