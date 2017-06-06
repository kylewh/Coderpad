import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { fromJS } from 'immutable'
import createSagaMiddleware from 'redux-saga'
import createAppReducer from './reducers'
import Perf from 'react-addons-perf'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore (initialState = {}, history) {
  const win = window
  win.perf = Perf
  /**
   *  Create the store with three middlewares
   *  1. action Logger: mark every dispatch
   *  2. sagaMiddleware: Makes redux-sagas work
   *  3. routerMiddleware: Syncs the location/URL path to the state
  */
  const middlewarles = []
  if (process.env.NODE_ENV !== 'production') {
    middlewarles.push(
      createLogger({
        collapsed: false,
        stateTransformer: state => state.toJS()
      })
    )
  }
  middlewarles.push(sagaMiddleware)
  middlewarles.push(routerMiddleware(history))

  const enhancers = [applyMiddleware(...middlewarles)]

  // If Redux DevTools Extension is installed, use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
  /* eslint-enable */

  const store = createStore(
    createAppReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  )

  // Extensions
  store.runSaga = sagaMiddleware.run

  return store
}
