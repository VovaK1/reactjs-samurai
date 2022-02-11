import {createSelector} from "reselect";

const getUsers = (state) => {
    return state.usersPage.users;
}

export const getUsersSelector = createSelector(getUsers, (users) => users);

const getUsersPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getUsersPageSizeSelector = createSelector(getUsersPageSize, (pageSize) => pageSize);

const getUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getUsersCountSelector = createSelector(getUsersCount, (usersCount) => usersCount);

const getUsersCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getUsersCurrentPageSelector = createSelector(getUsersCurrentPage, (currentPage) => currentPage);

const getUsersPageIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getUsersPageIsFetchingSelector = createSelector(getUsersPageIsFetching, (isFetching) => isFetching);

const getUsersPageFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}

export const getUsersPageFollowingInProgressSelector = createSelector(getUsersPageFollowingInProgress, (followingInProgress) => followingInProgress);

