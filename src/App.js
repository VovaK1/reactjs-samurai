import "./App.css";
import {BrowserRouter, Route, withRouter} from "react-router-dom";

import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>;

        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="main">
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

const AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const SamuraiApp = (props) => (<BrowserRouter>
    <Provider store={store}>
        <AppContainer />
    </Provider>
</BrowserRouter>);

export default SamuraiApp;
