import { combineReducers } from 'redux'
import { reducerUser } from './reducerUser'

export const reducer = combineReducers({
  user: reducerUser
})
