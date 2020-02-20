const userInitState = {
  token: ''
}

export const reducerUser = (state = userInitState, action) => {
  if (action.type === 'REQUEST') {
    return {
      ...state,
      token: state.token
    }
  }
  return state
}
