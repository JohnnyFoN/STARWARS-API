import EVENT from "./events";

const getPosts = posts => ({
  type: EVENT.GET_ALL_POSTS,
  payload: posts
});

const addPost = post => ({
  type: EVENT.ADD_POST,
  payload: post
});

const deletePost = post => ({
  type: EVENT.DELETE_POST,
  payload: post
});

const editPost = post => ({
  type: EVENT.EDIT_POST,
  payload: post
});

const viewPost = post => ({
  type: EVENT.VIEW_POSTS,
  payload: post
});

const filterPosts = posts => ({
  type: EVENT.filterPosts,
  payload: posts
});

export default {
  getPosts,
  addPost,
  deletePost,
  editPost,
  viewPost,
  filterPosts
};
