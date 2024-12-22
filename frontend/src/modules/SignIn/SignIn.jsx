import { Link } from 'react-router-dom';
import  styles from './SignIn.module.css';
import { Formik, Form, Field, ErrorMessage } from  'formik';

const SignIn = () => {
    return (
        <>
            <Formik
                initialValues={{email: '', password: ''}}
                validate={values => {
                const errors = {};

                if(!values.email) {
                    errors.email = "*Required";
                }

                if(!values.password) {
                    errors.password = "*Required";
                }

                return errors;
                }}
                onSubmit={console.log("Subbed")}
            >
                <Form className={styles.authorization}>
                    <h2>Sign In</h2>

                    <div className={styles.inputContainer}>
                        <ErrorMessage className={styles.error} name='email' component='div'/>
                        <Field className={styles.input} type='email' name='email' placeholder='Email' />
                    </div>

                    <div className={styles.inputContainer}>
                        <ErrorMessage className={styles.error} name='password' component='div'/>
                        <Field className={styles.input} type='password' name='password' placeholder='Password' />
                    </div>

                    <button className={styles.button} type='submit'>Sign Up</button>

                    <Link to='/' className={styles.link}>Sign up</Link>
                </Form>
            </Formik>
        </>
    )
}

export default SignIn;