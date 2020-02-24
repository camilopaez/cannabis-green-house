const userInitialState = {
  token: ""
};

export const userReducer = (state = userInitialState, action) => {
  if (action.type === "REQUEST") {
    return {
      ...state,
      token: action.payload.token
    };
  }
  return state;
};
