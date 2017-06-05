import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import writePad from '../WritePad/reducer'
import newsFeed from '../NewsFeed/reducer'
import musicTime from '../MusicTime/reducer'

const appReducer = combineReducers({
  writePad,
  newsFeed,
  musicTime
})

export default appReducer
