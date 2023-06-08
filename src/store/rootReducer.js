import { combineReducers } from "redux";

import { navbarReducer } from "./navbar/navbar.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  navbar: navbarReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  user: userReducer,
});
