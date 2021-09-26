import React from "react";
import classes from './MyPosts.module.css';

import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.posts.map((el) => <Post message={el.post} key={el.key} likes={el.likesCount}/>)

    let newPostEl = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostEl.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea cols="30" rows="10" ref={newPostEl} value={props.newPostText} onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
