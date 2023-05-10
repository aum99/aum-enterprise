import { all, call, takeLatest, put } from "redux-saga/effects";

import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.action";
import { getCollectionAndCategories } from "../../utils/firebase/firebase.utils";

export function* fetchCategoriesAsync() {
  try {
    const categoriesMap = yield call(getCollectionAndCategories);
    yield put(fetchCategoriesSuccess(categoriesMap));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onfetchCategoriesStart() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onfetchCategoriesStart)]);
}
