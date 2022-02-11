import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, setFollowingInProgress, unfollow,} from "../../redux/reducers/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getUsersCountSelector,
    getUsersCurrentPageSelector,
    getUsersPageFollowingInProgressSelector,
    getUsersPageIsFetchingSelector,
    getUsersPageSizeSelector, getUsersSelector,
} from "../../redux/selectors/usersSelector";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                       setFollowingInProgress={this.props.setFollowingInProgress}
                />

            }

        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getUsersPageSizeSelector(state),
        totalUsersCount: getUsersCountSelector(state),
        currentPage: getUsersCurrentPageSelector(state),
        isFetching: getUsersPageIsFetchingSelector(state),
        followingInProgress: getUsersPageFollowingInProgressSelector(state),
    }
};

export default compose(withAuthRedirect, connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, setFollowingInProgress, getUsers,
}))(UsersContainer);

