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
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
};

const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: { userId, email, login } });

export const authMe = () => (dispatch) => {
    authAPI.auth().then(response => {
        if (response.resultCode === 0) {
            const {id, login, email} = response.data;
            dispatch(setUserData(id, email, login));
        }
    })
}

export default authReducer;
