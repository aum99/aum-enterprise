import { createSelector } from "reselect";

const selectNavbarReducer = (state) => state.navbar;

export const selectIsMenuOpen = createSelector(
  [selectNavbarReducer],
  (nav) => nav.isNavbarOpen
);
