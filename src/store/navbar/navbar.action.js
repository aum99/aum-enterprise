import { NAVBAR_ACTION_TYPES } from "./navbar.types";
import { createAction } from "../../utils/reducer-utils/reducer.utils";

export const toggleNavbar = (bool) =>
  createAction(NAVBAR_ACTION_TYPES.TOGGLE_NAVBAR_MENU, bool);
