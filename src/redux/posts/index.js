import EVENT from "./events";

let initialState = {
  error: "",
  posts: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EVENT.GET_ALL_POSTS:
      return {
        ...state,
        posts: payload
      };
    case EVENT.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, payload]
      };
    case EVENT.DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter(p => p != payload)]
      };
    case EVENT.FILTER_POSTS:
      return {};
    default:
      return state;
  }
};
