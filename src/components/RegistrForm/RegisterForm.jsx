import { Formik,Form, Field } from "formik";

export default function RegisterForm() {
    return (
        
        <Formik  initialValues={{
            name: "",
            email: "",
            password: "",
            }}>
                <Form>
                    <label>
                        Username 
                        <Field type="text" name="name"/>
                    </label>
                    <label>
                        Email 
                        <Field type="email" name="email"/>
                    </label>
                    <label >
                        Password
                        <Field type="password" name="email"/>
                    </label>
                    <button type="submit">Register</button>
                </Form>
        </Formik>
    )
}