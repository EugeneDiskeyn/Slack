import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from  "formik";
import { object, string } from "yup";
import axios from "axios";
import  styles from "./SignIn.module.css";

const SignIn = () => {

    const navigate = useNavigate();

    const schema = object().shape({
        username: string().min(4),
        password: string().min(4)
    });

    const handleValidate = (values) => {
        const errors = {};

        Object.keys(values).map((key) => {
            if (!values[key]) {
                errors[key] = "Required";
            }
        });

        return errors;
    }

    const handleSubmit = (values) => {
        axios.post("/api/v1/login", {username: values.username, password: values.password})
            .then(response => {
                localStorage.setItem("token", response.data.token);
                navigate("/main");
            })
    }

    return (
        <>
            <Formik
                initialValues={{username: "", password: ""}}
                validationSchema={schema}
                validate={values => handleValidate(values)}
                onSubmit={values => handleSubmit(values)}
            >
                <Form className={styles.authorization}>
                    <h2>Sign In</h2>

                    <div className={styles.inputContainer}>
                        <ErrorMessage className={styles.error} name="username" component="div"/>
                        <Field className={styles.input} type="username" name="username" placeholder="Username" />
                    </div>

                    <div className={styles.inputContainer}>
                        <ErrorMessage className={styles.error} name="password" component="div"/>
                        <Field className={styles.input} type="password" name="password" placeholder="Password" />
                    </div>

                    <button className={styles.button} type="submit">Sign In</button>

                    <Link to="/" className={styles.link}>Sign up</Link>
                </Form>
            </Formik>
        </>
    )
}

export default SignIn;