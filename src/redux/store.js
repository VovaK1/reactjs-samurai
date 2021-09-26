import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', likesCount: 15},
                {id: 2, post: 'It\'s my first post!', likesCount: 20},
                {id: 3, post: 'One else about nothing!!!', likesCount: 10},
            ],
            newPostText: ''
        },

        dialogsPage: {

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
        },

        sidebar: {}
    },
    _callSubscriber() {
        console.log('store changed')
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;