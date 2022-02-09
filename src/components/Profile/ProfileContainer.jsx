import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/reducers/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.userId;
        if (!userId) this.props.history.push("/login");
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'} />

        return (
            <Profile {...this.props} />
        )
    }
}


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {getProfile, updateStatus, getStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
