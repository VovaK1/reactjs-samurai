import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        alt="avatar"
      />
      <span className={classes.message}>
        {props.message}
      </span>
      <div>
        <span className={classes.likeCounter}>{props.likes}</span>
        <span className={classes.likeButton}>Like</span>
      </div>
    </div>
  );
};

export default Post;
