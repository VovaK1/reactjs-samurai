import {usersAPI} from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

const initialState =  {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(item => {
                    if (item.id === action.userID) {
                        return {...item, followed: true};
                    }
                    return item;
                })};
        case UNFOLLOW:
            return {...state, users: state.users.map(item => {
                    if (item.id === action.userID) {
                        return {...item, followed: false}
                    }
                    return item;
                })};
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount / 100}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.id] :
                    [...state.followingInProgress.filter(id => id !== action.id)]
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setFollowingInProgress = (isFetching, id) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, id});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((response) => {
        dispatch(setIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(setCurrentPage(currentPage));
    })
}

export const follow = (id) => (dispatch) => {
    dispatch(setFollowingInProgress(true, id));
    usersAPI.follow(id).then((response) => {
        if (response.resultCode === 0) {
            dispatch(followSuccess(id));
        }
        dispatch(setFollowingInProgress(false, id));
    })
}

export const unfollow = (id) => (dispatch) => {
    dispatch(setFollowingInProgress(true, id));
    usersAPI.unfollow(id).then((response) => {
        if (response.resultCode === 0) {
            dispatch(unfollowSuccess(id));
        }
        dispatch(setFollowingInProgress(false, id));
    })
}

export default usersReducer;
