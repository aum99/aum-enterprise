import { NAVBAR_ACTION_TYPES } from "./navbar.types";

const INITIAL_STATE = {
  isNavbarOpen: false,
};

export const navbarReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case NAVBAR_ACTION_TYPES.TOGGLE_NAVBAR_MENU:
      return {
        ...state,
        isNavbarOpen: payload,
      };
    default:
      return state;
  }
};
