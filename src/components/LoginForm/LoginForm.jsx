import { Formik, Form, Field} from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css"

export default function LoginForm() {
    const dispatch = useDispatch()
    const handleSubmit = (values, actions) => {
        dispatch(login(values))
        actions.resetForm();
    };
    return (
        <Formik  initialValues={{
            email: "",
            password: "",
           }}
           onSubmit={handleSubmit}
           >
            <Form  className={css.form}>
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