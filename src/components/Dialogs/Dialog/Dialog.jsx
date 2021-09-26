import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <li className={classes.dialog + " " + classes.active}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
        </li>
    )
}

export default Dialog;