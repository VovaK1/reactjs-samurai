import {authAPI} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isLoading: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
};

const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export const authMe = () => (dispatch) => {
    authAPI.auth().then(response => {
        if (response.resultCode === 0) {
            const {id, login, email} = response.data;
            dispatch(setUserData(id, email, login, true));
        }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.resultCode === 0) {
            dispatch(authMe())
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    })
}

export default authReducer;
