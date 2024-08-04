// import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
// import { selectContacts } from "../../redux/contacts/selectors";


export default function ContactList() {

    // const contacts = useSelector(selectContacts);
    return (
        <ul>
            {/* {contacts.map( (contact) => ( */}

            <li >
                <Contact />
            </li>
            {/* ))} */}

        </ul>     
    )
}