import { combineReducers } from "redux";
import { navbarReducer } from "./navbar/navbar.reducer";

export const rootReducer = combineReducers({
  navbar: navbarReducer,
});
