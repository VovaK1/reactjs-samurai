import {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/authReducer";

class HeaderContainer extends Component {

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {logout}) (HeaderContainer);
