import React from "react";
import classes from "./Dialogs.module.css";

import Dialog from './Dialog/Dialog';
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((el) => <Dialog name={el.name} key={el.key} id={el.id}/>);
    let messagesElements = state.messages.map((el) => <Message message={el.message} key={el.key}/>);
    let newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    }

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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
                <div>
                    <textarea cols='20' rows='5' onChange={onNewMessageChange}
                              placeholder='Enter your message' value={newMessageBody}>

                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
