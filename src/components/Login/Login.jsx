import React from "react";
import {Form, Field} from "react-final-form";
import styles from './Login.module.css';
import {Input} from "../common/FormsControls/FormsControls";

const LoginForm = (props) => {

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onSubmit = async (state) => {
        await sleep(500);
        window.alert(JSON.stringify(state, undefined, 2));
    }

    const required = value => value ? undefined : 'Required';

    return (
            <Form onSubmit={onSubmit}>
                {(form) => (
                    <form onSubmit={form.handleSubmit}>
                        <div>
                            <Field name='login' component={Input} placeholder='Login' validate={required}>
                                {({input, meta, placeholder}) => (
                                    <div>
                                        <label className={styles.label}>Login</label>
                                        <input {...input} className={styles.input} />
                                        {meta.error && meta.touched && <span style={{color: 'red'}}>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div>
                            <Field name='password' component={Input} placeholder='Password' validate={required}>
                                {({input, meta, placeholder}) => (
                                    <div>
                                        <label className={styles.label}>Password</label>
                                        <input {...input} className={styles.input} />
                                        {meta.error && meta.touched && <span style={{color: 'red'}}>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div>
                            <Field name='Remember me' component={Input} type='checkbox'>
                                {({input, meta}) => (
                                    <div>
                                        <label className={styles.label}>Remember me</label>
                                        <input {...input} className={styles.input} />
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                    </form>
                )}
            </Form>
    )
};

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
           <LoginForm />
        </div>
    )
};

export default Login;
