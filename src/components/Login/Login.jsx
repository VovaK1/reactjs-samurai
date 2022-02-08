import React from "react";
import {Form, Field} from "react-final-form";
import styles from './Login.module.css';
import {Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {

    const required = value => value ? undefined : 'Required';

    return (
            <Form onSubmit={props.onSubmit}>
                {(form) => (
                    <form onSubmit={form.handleSubmit}>
                        <div>
                            <Field name='email' component={Input} placeholder='Email' validate={required}>
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
                            <Field name='rememberMe' component={Input} type='checkbox'>
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

    const onSubmit = async (data) => {
        props.login(data.email, data.password, data.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
           <LoginForm onSubmit={onSubmit} />
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
