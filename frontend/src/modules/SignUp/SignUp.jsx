import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import axios from "axios";
import styles from "./SignUp.module.css";

const SignUp = () => {

    const navigate = useNavigate();

    const schema = object().shape({
        username: string().min(4),
        password: string().min(4)
    });

    const handleValidate = (values) => {
        const errors = {};

        if (values.passwordRepeat !== values.password) {
            errors.passwordRepeat = "Password must be the same";
        }

        Object.keys(values).map((key) => {
            if (!values[key]) {
                errors[key] = "Required";
            }
        });

        return errors;
    }

    const handleSubmit = (values) => {
        axios.post("/api/v1/signup", {username: values.username, password: values.password})
            .then(response => {
                localStorage.setItem("token", response.data.token);
                navigate("main");
            });
    }
    
    return (
        <>
            <Formik
             initialValues={{username: "", password: "", passwordRepeat: ""}}
             validationSchema={schema}
             validate={values => handleValidate(values)}
             onSubmit={values => handleSubmit(values)}
            >
                <Form className={styles.authorization}>
                    <h2>Sign Up</h2>

                    <div className={styles.inputContainer}>
                        <ErrorMessage className={styles.error} name="username" component="div"/>
                        <Field className={styles.input} type="text" name="username" placeholder="Username" />
                    </div>

                    <div className={styles.inputContainer}>
                        <ErrorMessage className={styles.error} name="password" component="div"/>
                        <Field className={styles.input} type="password" name="password" placeholder="Password" />
                    </div>

                    <div className={styles.inputContainer}>
                        <ErrorMessage className={styles.error} name="passwordRepeat" component="div"/>
                        <Field className={styles.input} type="password" name="passwordRepeat" placeholder="Repeat Password" />
                    </div>

                    <button className={styles.button} type="submit">Sign Up</button>

                    <Link to="signIn" className={styles.link}>Sign in</Link>
                </Form>
            </Formik>
        </>
    );
}

export default SignUp;