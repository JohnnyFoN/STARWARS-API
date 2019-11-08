const userReducer = (state = 0, action) => {
  switch (action.type) {
    case "GET_ALL_USERS":
      return 1;
      break;
    default:
      return 0;
      break;
  }
};

export default userReducer;
