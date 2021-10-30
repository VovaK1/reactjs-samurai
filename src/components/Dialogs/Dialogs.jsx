import React from "react";
import classes from "./Dialogs.module.css";

import Dialog from './Dialog/Dialog';
import Message from "./Message/Message";
import {Form, Field} from "react-final-form";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((el) => <Dialog name={el.name} key={el.key} id={el.id}/>);
    let messagesElements = state.messages.map((el) => <Message message={el.message} key={el.key}/>);

    const sendNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogsList}>
                {dialogsElements}
            </ul>

            <div>
                <ul className={classes.messagesList}>
                    {messagesElements}
                </ul>
                <AddMessageForm sendNewMessage={sendNewMessage} />
            </div>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <Form onSubmit={props.sendNewMessage}>
            {(form) => (
                <form onSubmit={form.handleSubmit}>
                    <div>
                        <Field name='newMessageBody' component='textarea' placeholder='Enter your message' />
                    </div>
                    <div>
                        <button>Send message</button>
                    </div>
                </form>
            )}
        </Form>
    )
}

export default Dialogs;
