import { combineReducers } from "redux";

import { navbarReducer } from "./navbar/navbar.reducer";
import { categoriesReducer } from "./categories/categories.reducer";

export const rootReducer = combineReducers({
  navbar: navbarReducer,
  categories: categoriesReducer,
});
