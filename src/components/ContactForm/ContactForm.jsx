import { Field, Formik, Form, ErrorMessage} from "formik";

export default function ContactForm() {
    return (
        <Formik nitialValues={{
            id: "",
            name: "",
            number: ""
        }}
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
                    <ErrorMessage name="number"/>
                </div>
                <button type="submit">Add Contact</button>
            </Form>
        </Formik>
    )
}