import {profileAPI} from "../../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

const initialState =  {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesCount: 15},
        {id: 2, post: 'It\'s my first post!', likesCount: 20},
        {id: 3, post: 'One else about nothing!!!', likesCount: 10},
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
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
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(post => post.id !== action.postId)
            }

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

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

export const savePhoto = (file) => (dispatch) => {
    profileAPI.savePhoto(file)
        .then(response => {
            if (response.resultCode === 0) {
                console.log('response', response);
                dispatch(savePhotoSuccess(response.data.photos));
            }
        })
}

export default profileReducer;
