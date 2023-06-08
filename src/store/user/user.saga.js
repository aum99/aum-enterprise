import { all, call, put, takeLatest } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";

import {
  createUserAuth,
  createUserDoc,
  signInAuth,
  signOutUser,
  signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";

import {
  signUpSuccess,
  signUpFailed,
  signInSuccess,
  signInFailed,
  signOutFailed,
  signOutSuccess,
} from "./user.action";

export function* getSnapShotFromAuth(user, additionalInfo) {
  try {
    const userSnap = yield call(createUserDoc, user, additionalInfo);
    console.log("heheh");
    if (userSnap) {
      yield put(signInSuccess({ id: userSnap.id, ...userSnap.data() }));
    }
  } catch (error) {
    console.log("herherhehre");
    yield put(signInFailed(error));
  }
}

export function* signIn({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInAuth, email, password);
    if (user) {
      yield call(getSnapShotFromAuth, user);
    }
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalInfo } }) {
  yield call(getSnapShotFromAuth, user, additionalInfo);
}

export function* signUp({ payload: { email, password, displayName, number } }) {
  try {
    const userCreds = yield call(createUserAuth, email, password);
    if (userCreds) {
      const { user } = userCreds;
      yield put(signUpSuccess(user, { displayName, number }));
    }
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopUp);
    yield* call(getSnapShotFromAuth, user);
  } catch (error) {
    yield* put(signInFailed(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSucces() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_IN_START, signIn);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSaga() {
  yield all([
    call(onSignUpStart),
    call(onSignUpSucces),
    call(onSignInStart),
    call(onGoogleSignInStart),
    call(onSignOutStart),
  ]);
}
