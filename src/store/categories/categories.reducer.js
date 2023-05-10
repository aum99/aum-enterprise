import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const INITIAL_STATE = {
  categories: [],
  error: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
