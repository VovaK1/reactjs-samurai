import React from "react";
import classes from './MyPosts.module.css';

import Post from './Post/Post';
import {Form, Field} from "react-final-form";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = (props) => {

    let postsElements = props.posts.map((el) => <Post message={el.post} key={el.key} likes={el.likesCount}/>)

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostForm addPost={onAddPost} />
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};

const AddPostForm = (props) => {

    const required = (value) => (value ? undefined : "Required");

    return (
        <Form onSubmit={props.addPost}>
            {(form) => (
                <form onSubmit={form.handleSubmit}>
                    <div>
                        <Field validate={required} placeholder='Post message' name='newPostText' component={Textarea} cols="30" rows="10" />
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </form>
            )}
        </Form>
    )
}

export default MyPosts;
