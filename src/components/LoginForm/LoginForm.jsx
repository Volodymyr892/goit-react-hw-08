import { Formik, Form, Field} from "formik";

export default function LoginForm() {
    return (
        <Formik  initialValues={{
            email: "",
            password: "",
          }}>
            <Form>
                <label>
                    Email
                    <Field type="email" name="email"/>
                </label>
                <label>
                    Password 
                    <Field type="password" name="password"/>
                </label>
                <button type="submit">Log in</button>
            </Form>
        </Formik>
    )
}