import { Link } from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './SignUp.module.css';

const SignUp = () => {
    return (
        <>
            <Formik
             initialValues={{email: '', password: '', passwordRepeat: ''}}
             validate={values => {
                const errors = {};

                if(!values.email) {
                    errors.email = "*Required";
                }

                if(!values.password) {
                    errors.password = "*Required";
                }

                if(!values.passwordRepeat) {
                    errors.passwordRepeat = "*Required";
                }

                return errors;
             }}
             onSubmit={console.log("Subbed")}
            >
                <Form className={styles.authorization}>
                    <h2>Sign Up</h2>

                    <div className={styles.inputContainer}>
                        <ErrorMessage className={styles.error} name='email' component='div'/>
                        <Field className={styles.input} type='email' name='email' placeholder='Email' />
                    </div>

                    <div className={styles.inputContainer}>
                        <ErrorMessage className={styles.error} name='password' component='div'/>
                        <Field className={styles.input} type='password' name='password' placeholder='Password' />
                    </div>

                    <div className={styles.inputContainer}>
                        <ErrorMessage className={styles.error} name='passwordRepeat' component='div'/>
                        <Field className={styles.input} type='password' name='passwordRepeat' placeholder='Repeat Password' />
                    </div>

                    <button className={styles.button} type='submit'>Sign Up</button>

                    <Link to='signIn' className={styles.link}>Sign in</Link>
                </Form>
            </Formik>
        </>
    );
}

export default SignUp;