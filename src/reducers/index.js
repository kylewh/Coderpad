import { combineReducers } from 'redux';
import { createSelector } from 'reselect'
import pomodoro from './pomodoro'
import writePad from './writePad'
import newsFeed from './newsFeed'

const rootReducer = combineReducers({
  writePad,
  newsFeed,
  pomodoro
})

export default rootReducer

