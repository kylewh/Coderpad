import { all } from 'redux-saga/effects'
import {
  watchLoadHackerNews,
  watchLoadGitHub,
  watchLoadV2exTopic,
  watchLoadV2exTopics,
  watchLoadV2exHot
} from '../NewsFeed/saga'

export default function * rootSaga () {
  yield all([
    watchLoadHackerNews(),
    watchLoadGitHub(),
    watchLoadV2exTopic(),
    watchLoadV2exTopics(),
    watchLoadV2exHot()
  ])
}
