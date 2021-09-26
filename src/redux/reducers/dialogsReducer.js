const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {

    dialogs: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Jack'},
        {id: 3, name: 'Catherine'},
        {id: 4, name: 'Angelina'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Anthony'},
        {id: 7, name: 'Sylvia'},
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello World!'},
        {id: 3, message: 'Yoo'},
        {id: 4, message: 'Lorem ipsum'},
        {id: 5, message: 'Smth else'}
    ],

    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;
