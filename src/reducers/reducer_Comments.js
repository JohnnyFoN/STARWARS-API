const commentReducer = (state = 0, action) => {
  switch (action.type) {
    case "GET_ALL_COMMENTS_FOR_POST":
      return 1;
      break;
    default:
      return 0;
      break;
  }
};

export default commentReducer;
