import React from "react";
import styles from './FormsControls.module.css';

export const Textarea = (props) => {
  const {input, meta, child, ...restprops} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restprops}/>
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restprops} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restprops}/>
        </FormControl>
    )
}

const FormControl = ({input, meta, child, ...props}) => {

    const hasError = meta.error && meta.touched;

    return (
        <div className={styles.formControl + " " + styles.error}>
            <div>
                <div>
                    {props.children}
                </div>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
