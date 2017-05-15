import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers'
import * as fromRoot from './containers/Root'

const configureStore = () => {
  const middlewarles = []
  middlewarles.push(createLogger())
  middlewarles.push(routerMiddleware(fromRoot.history))

  const enhancers = [
    applyMiddleware(...middlewarles)
  ]

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  
  const store = createStore(
    combineReducers({
      app: rootReducer,
      routing: routerReducer
    }),
    composeEnhancers(...enhancers)
  )

  return store
}

export default configureStore
