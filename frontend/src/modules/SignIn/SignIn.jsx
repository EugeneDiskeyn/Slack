import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from  "formik";
import { object, string } from "yup";
import  styles from "./SignIn.module.css";

const SignIn = () => {
    const schema = object().shape({
        email: string().email(),
        password: string().min(8)
    });
    return (
        <>
            <Formik
                initialValues={{email: "", password: ""}}
                validationSchema={schema}
                validate={values => {
                const errors = {};

                Object.keys(values).map((key) => {
                    if (!values[key]) {
                        errors[key] = "Required";
                    }
                });

                return errors;
                }}
                onSubmit={console.log("Subbed")}
            >
                <Form className={styles.authorization}>
                    <h2>Sign In</h2>

                    <div className={styles.inputContainer}>
                        <ErrorMessage className={styles.error} name="email" component="div"/>
                        <Field className={styles.input} type="email" name="email" placeholder="Email" />
                    </div>

                    <div className={styles.inputContainer}>
                        <ErrorMessage className={styles.error} name="password" component="div"/>
                        <Field className={styles.input} type="password" name="password" placeholder="Password" />
                    </div>

                    <button className={styles.button} type="submit">Sign Up</button>

                    <Link to="/" className={styles.link}>Sign up</Link>
                </Form>
            </Formik>
        </>
    )
}

export default SignIn;