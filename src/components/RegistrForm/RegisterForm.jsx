import { Formik,Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./Register.module.css"

export default function RegisterForm() {
     const dispatch = useDispatch()
    const handleSubmit = (values, actions) => {
        dispatch(register(values))
        actions.resetForm();
    };
    return (
        
        <Formik  initialValues={{
            name: "",
            email: "",
            password: "",
            }}
            onSubmit={handleSubmit}
            >
                <Form className={css.form}>
                    <label>
                        Username 
                        <Field type="name" name="name"/>
                    </label>
                    <label>
                        Email 
                        <Field type="email" name="email"/>
                    </label>
                    <label >
                        Password
                        <Field type="password" name="password"/>
                    </label>
                    <button type="submit">Register</button>
                </Form>
        </Formik>
    )
}