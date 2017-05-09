import { combineReducers } from 'redux'
import pomodoro from './pomodoro'
import write from './write'
import newsFeed from './newsFeed'

const rootReducer = combineReducers({
  write,
  newsFeed,
  pomodoro
})

export default rootReducer
