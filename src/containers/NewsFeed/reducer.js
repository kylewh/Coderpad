import { combineReducers } from 'redux-immutable'
import hackerNews from './HackerNews/reducer'
import github from './Github/reducer'
import v2ex from './V2EX/reducer'

const newsFeed = combineReducers({ hackerNews, github, v2ex })

export default newsFeed
