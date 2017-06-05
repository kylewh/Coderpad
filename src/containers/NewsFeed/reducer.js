import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable'
import * as actions from '../App/constant'

const newsFeed = (
  state = Immutable.fromJS({
    hackerNews: [],
    github: [],
    v2ex: {
      topics: [],
      hot: [],
      topic: {
        topicInfo: Immutable.Map({}),
        replies: Immutable.List([])
      }
    }
  }),
  action
) => {
  switch (action.type) {
    case actions.FETCH_HACKERNEWS_SUCCESS:
      return state.set('hackerNews', Immutable.List(action.payload))
    case actions.FETCH_GITHUB_SUCCESS:
      return state.set('github', Immutable.List(action.payload))
    case actions.FETCH_V2EX_TOPIC_SUCCESS:
      return state.setIn(
        ['v2ex', 'topic'],
        Immutable.Map({
          topicInfo: Immutable.Map(action.payload.topicInfo),
          replies: Immutable.List(action.payload.replies)
        })
      )
    case actions.FETCH_V2EX_TOPICS_SUCCESS:
      if (action.payload.contentType === 'hot') {
        return state.setIn(
          ['v2ex', 'hot'],
          Immutable.List(action.payload.topics)
        )
      }
      return state.setIn(
        ['v2ex', 'topics'],
        Immutable.List(action.payload.topics)
      )
    case actions.CLEAN_TOPIC_CACHE:
      return state.setIn(
        ['v2ex', 'topic'],
        Immutable.Map({
          topicInfo: Immutable.Map({}),
          replies: Immutable.List([])
        })
      )
    default:
      return state
  }
}

export default newsFeed
