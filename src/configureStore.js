import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { routerReducer, routerMiddleware } from "react-router-redux";
import rootReducer from "./reducers";
import * as fromRoot from "./containers/Root";

import rootSaga from "./containers/App/rootSaga";

const configureStore = initialState => {
  const middlewarles = [];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }
  middlewarles.push(routerMiddleware(fromRoot.history));
  const sagaMiddleWare = createSagaMiddleware();
  middlewarles.push(sagaMiddleWare);

  // const enhancers = [applyMiddleware(...middlewarles)];

  // const composeEnhancers = process.env.NODE_ENV !== "production" &&
  //   typeof window === "object" &&
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //   : compose;
  const store = createStore(
    combineReducers({
      app: rootReducer,
      routing: routerReducer
    }),
    initialState,
    compose(
      // applyMiddleware(...middlewarles),
      window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  );

  sagaMiddleWare.run(rootSaga);

  return store;
};

export default configureStore;
