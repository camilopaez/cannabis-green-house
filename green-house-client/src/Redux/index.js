import { combineReducers } from 'redux'
import { reducerUser } from './reducerUser'
import { reducerContext } from './reducerContext'

export const reducer = combineReducers({
  user: reducerUser,
  context: reducerContext
})
