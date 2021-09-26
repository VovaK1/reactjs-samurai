import React from 'react';
import classes from "./Users.module.css";
import anonimUser from "../../assets/images/small-avatar.svg";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const follow = (id) => {
        props.follow(id);
    }

    const unfollow = (id) => {
        props.unfollow(id);
    }

return (
    <div>
        <div>
            {pages.map(page => <span
                className={props.currentPage === page && classes.selectedPage}
                onClick={(e) => props.onPageChanged(page)}>
                        {page}
                    </span>
            )}
        </div>
        {
            props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : anonimUser}
                                     className={classes.photo}/>
                            </NavLink>
                        </div>
                    </span>
                <span>
                        <div>
                            {

                                user.followed ?  <button disabled={props.followingInProgress.some((id) => id === user.id)} onClick={() => unfollow(user.id)}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some((id) => id === user.id)} onClick={() => follow(user.id)}>Follow</button>
                                }
                                </div>
                                </span>
                                <span>
                                <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                                </span>
                                <span>
                                <div>{'user.location.city'}</div>
                                <div>{'user.location.country'}</div>
                                </span>
                                </span>
                                </div>)
                                }
                                </div>
                                )
                            }

                            export default Users;
