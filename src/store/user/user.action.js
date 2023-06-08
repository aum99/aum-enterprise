import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer-utils/reducer.utils";

export const signUpStart = (email, password, displayName, number) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
    number,
  });

export const signUpSuccess = (user, additionalInfo) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalInfo });

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_START, { email, password });

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
