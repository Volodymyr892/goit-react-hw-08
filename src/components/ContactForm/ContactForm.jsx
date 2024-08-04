import { Field, Formik, Form, ErrorMessage} from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContacts } from "../../redux/contacts/operations";

const UserSchema = Yup.object().shape(
    {
        name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      number: Yup.string()
        .min(3, "Too Short!")
        .max(13, "Too Long!")
        .required("Required")
    }
)

export default function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit =(values, actions)=> {
        console.log('Submitted values:', values);
        actions.resetForm()
    dispatch(addContacts(values));
    };

    return (
        <Formik initialValues={{
            id: "",
            name: "",
            number: ""
        }}
        validationSchema={UserSchema}
        onSubmit ={handleSubmit}
        >
            <Form>
                <div>
                    <p>Name</p>
                    <Field type="text" name="name"/>
                    <ErrorMessage name="name"/>
                </div>
                <div>
                    <p>Number</p>
                    <Field type="text" name="number"/>
                    <ErrorMessage name="number" component="span"/>
                </div>
                <button type="submit">Add Contact</button>
            </Form>
        </Formik>
    )
}