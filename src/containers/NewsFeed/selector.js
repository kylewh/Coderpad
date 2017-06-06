import { createSelector } from 'reselect'
import { makeSelectNewsFeed } from '../App/selectors'

export const makeSelectHackerNews = createSelector(
  makeSelectNewsFeed,
  newsFeedState => newsFeedState.get('hackerNews').toArray()
)

export const makeSelectGithub = createSelector(
  makeSelectNewsFeed,
  newsFeedState => newsFeedState.get('github').toArray()
)

export const makeSelectV2ex = createSelector(
  makeSelectNewsFeed,
  newsFeedState => newsFeedState.get('v2ex')
)

export const makeSelectV2exTopic = createSelector(makeSelectV2ex, v2exState =>
  v2exState.get('topic')
)

export const makeSelectV2exTopicInfo = createSelector(
  makeSelectV2exTopic,
  topicState => {
    return topicState.get('topicInfo')
  }
)

export const makeSelectV2exReplies = createSelector(
  makeSelectV2exTopic,
  topicState => topicState.get('replies').toArray()
)

export const makeSelectV2exTopics = createSelector(makeSelectV2ex, v2exState =>
  v2exState.get('topics')
)

export const makeSelectV2exHot = createSelector(makeSelectV2ex, v2exState =>
  v2exState.get('hot')
)
