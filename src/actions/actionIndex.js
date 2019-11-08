//Users

export const getAllUsers = list => {
  return {
    type: "GET_ALL_USERS",
    listOfUsers: [...list]
  };
};

//Posts

export const getAllPosts = () => {
  return {
    type: "GET_ALL_POSTS",
    listOfPosts: []
  };
};

export const getAllPostForUser = userId => {
  return {
    type: "GET_ALL_POSTS_FOR_USER",
    identifier: userId
  };
};

export const addPost = () => {
  return {
    type: "ADD_POST"
  };
};

export const deletePost = postId => {
  return {
    type: "DELETE_POST",
    identifier: postId
  };
};

export const editPosts = postId => {
  return {
    type: "EDIT_POST",
    identifier: postId
  };
};

export const viewPost = postId => {
  return {
    type: "VIEW_POST",
    identifier: postId
  };
};

export const filterPosts = () => {
  return {
    type: "FILTER_POSTS"
  };
};

//Comments
export const getAllCommentsForPost = postId => {
  return {
    type: "GET_ALL_COMMENTS_FOR_POST",
    identifier: postId
  };
};
