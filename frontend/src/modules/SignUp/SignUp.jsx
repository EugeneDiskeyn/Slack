import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import styles from "./SignUp.module.css";

const SignUp = () => {
    const schema = object().shape({
        username: string().min(4),
        email: string().email(),
        password: string().min(8)
    });
    
    return (
        <>
            <Formik
             initialValues={{username: "", email: "", password: "", passwordRepeat: ""}}
             validationSchema={schema}
             validate={values => {
                const errors = {};
                
                console.log(Object.keys(values));

                if (values.passwordRepeat !== values.password) {
                    errors.passwordRepeat = "Password must be the same";
                }

                Object.keys(values).map((key) => {
                    if (!values[key]) {
                        errors[key] = "Required";
                    }
                });

                return errors;
             }}
             onSubmit={console.log("Submited")}
            >
                <Form className={styles.authorization}>
                    <h2>Sign Up</h2>

                    <div className={styles.inputContainer}>
                        <ErrorMessage className={styles.error} name="username" component="div"/>
                        <Field className={styles.input} type="text" name="username" placeholder="Username" />
                    </div>

                    <div className={styles.inputContainer}>
                        <ErrorMessage className={styles.error} name="email" component="div"/>
                        <Field className={styles.input} type="email" name="email" placeholder="Email" />
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