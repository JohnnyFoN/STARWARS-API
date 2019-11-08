let initialState = {
  listOfPosts: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POSTS":
      return initialState;
      break;
    case "ADD_POST":
      return 2;
      break;
    case "EDIT_POST":
      return 3;
      break;
    case "REMOVE_POST":
      return 4;
      break;
    case "VIEW_POST":
      return 5;
      break;
    case "FILTER_POSTS":
      return 6;
      break;
    case "GET_ALL_POSTS_FOR_USER":
      return 7;
      break;
    default:
      return 0;
      break;
  }
};

function loger() {
  console.log(initialState.listOfPosts.length);
}

export default postReducer;
