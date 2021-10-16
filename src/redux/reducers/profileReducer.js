import {profileAPI} from "../../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState =  {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesCount: 15},
        {id: 2, post: 'It\'s my first post!', likesCount: 20},
        {id: 3, post: 'One else about nothing!!!', likesCount: 10},
    ],
    newPostText: '',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state, newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.userProfile,
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status,
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userId) => (dispatch) => {
        profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response));
        })
}

export const getStatus = (id) => (dispatch) => {
    profileAPI.getStatus(id)
        .then(response => dispatch(setStatus(response)))
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer;
