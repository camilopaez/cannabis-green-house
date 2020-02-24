import { createStore } from "redux";
import { reducer } from "lib/adapters";

export const storage = createStore(reducer);
