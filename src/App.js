import "./App.css";
import {Route} from "react-router-dom";

import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


function App() {
    return (
        <div className="wrapper">
            <HeaderContainer />
            <Nav/>
            <div className="main">
                <Route path='/dialogs' render={() => <DialogsContainer/>} />
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' render={() => <Settings />} />
                <Route path='/login' render={() => <Login />} />
            </div>
        </div>
    );
}

export default App;
