import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img
                alt="logo"
                src="https://banner2.cleanpng.com/20180517/ijw/kisspng-snapchat-logo-social-media-advertising-snap-inc-snapchat-5afe1fa255f2b4.4084826015266036823521.jpg"
            />

            <div className={classes.loginBlock}>
                {props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Log out</button></div>  :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;
