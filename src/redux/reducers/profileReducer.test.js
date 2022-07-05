import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

const state = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesCount: 15},
        {id: 2, post: 'It\'s my first post!', likesCount: 20},
        {id: 3, post: 'One else about nothing!!!', likesCount: 10},
    ],
}


it('new post should be added', () => {
    let action = addPostActionCreator('New post text');
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

it('message of new post should be correct', () => {
    let action = addPostActionCreator('New post text');
    let newState = profileReducer(state, action);

    expect(newState.posts[3].post).toBe('New post text');
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(2);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});
