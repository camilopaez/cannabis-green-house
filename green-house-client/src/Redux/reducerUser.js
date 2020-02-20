const userInitState = {
  token: 'juju'
}

export const reducerUser = (state = userInitState, action) => {
  if (action.type === 'REQUEST') {
    return {
      ...state,
      token: action.payload.token
    }
  }
  return state
}
