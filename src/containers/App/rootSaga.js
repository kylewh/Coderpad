import { all } from 'redux-saga/effects'
import {
  watchLoadHackerNews,
  watchHackerNews,
  watchLoadGitHub,
  watchGithub,
  watchLoadV2exTopic,
  watchV2exTopic,
  watchLoadV2exTopics,
  watchV2exTopics,
  watchLoadV2exHot,
  watchV2exHot
} from '../NewsFeed/saga'

export default function * rootSaga () {
  yield all([
    // watchLoadHackerNews(),
    // watchLoadGitHub(),
    // watchLoadV2exTopic(),
    // watchLoadV2exTopics(),
    // watchLoadV2exHot(),
    watchHackerNews(),
    watchGithub(),
    watchV2exTopic(),
    watchV2exTopics(),
    watchV2exHot()
  ])
}
