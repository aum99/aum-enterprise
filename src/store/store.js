import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter(Boolean);

const composedEnhancer =
  (process.env.NODE_ENV === "development" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);
