import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import appReducer from "./reducers/appReducer";
import thunkMiddleware  from 'redux-thunk';


const reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
