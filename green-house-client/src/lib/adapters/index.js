import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";

export const reducer = combineReducers({
  context: userReducer
});
