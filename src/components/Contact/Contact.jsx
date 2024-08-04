import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contacts/operations"

export default function Contact({ contact:{name,number,id} }) {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        console.log('Deleting contact with ID:', id); // Додати цю лінію для перевірки
        dispatch(deleteContact(id));
      };
    return(
            <>
                <div>
                    <p>Name {name}</p>
                    <p>Number {number}</p>
                </div>
                <button onClick={() =>handleDelete(id)}>Delete</button>
            </>
    )
}