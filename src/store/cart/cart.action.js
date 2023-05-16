import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer-utils/reducer.utils";

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
