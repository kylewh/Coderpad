import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { LOCATION_CHANGE } from 'react-router-redux'
import globalReducer from './containers/App/reducer'

const routeInitialState = fromJS({
  locationBeforeTransitions: null
})
/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      })
    default:
      return state
  }
}

export default function createAppReducer() {
  return combineReducers({
    route: routeReducer,
    global: globalReducer
  })
}
