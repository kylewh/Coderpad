import { call, fork, put, take, takeLatest, cancel } from 'redux-saga/effects'
import axios from 'axios'
import moment from 'moment'

const HACKERNEWS_BASE_URL = 'https://hacker-news.firebaseio.com/v0'
const wrapApiKey = 'vZpCx0QXD65gAcUD4Q7gAL6y0GQB1pgT'
const GITHUB_BASE_URL =
  'https://wrapapi.com/use/sunnysingh/github/trending/0.0.4?wrapAPIKey=' +
  wrapApiKey
// const V2EX_BASE_URL = "https://www.v2ex.com/api";
const V2EX_BASE_URL = '/news/v2ex'

/**
 * 30 top stories from hackerNews
 */
const fetchHackerNews = () => {
  const data = []
  return axios
    .get(HACKERNEWS_BASE_URL + '/topstories.json')
    .then(res =>
      res.data
        .slice(0, 30)
        .map(storyId =>
          axios.get(HACKERNEWS_BASE_URL + '/item/' + storyId + '.json')
        )
    )
    .then(res => {
      return Promise.all(res).then(res => {
        res.forEach(item => {
          data.push({
            id: item.data.id,
            title: item.data.title,
            by: item.data.by,
            url: item.data.url,
            points: item.data.score,
            commentCount: item.data.descendants,
            ago: moment.unix(item.data.time).fromNow()
          })
        })
      })
    })
    .then(() => data)
}

function * loadHackerNewsData () {
  try {
    let stories = yield call(fetchHackerNews)
    yield put({ type: 'FETCH_HACKERNEWS_SUCCESS', payload: stories })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

const fetchGithub = () => {
  const data = []
  return axios
    .get(GITHUB_BASE_URL)
    .then(res => {
      res.data.data.repositories.map(repo => {
        data.push({
          url: 'https://github.com' + repo.url,
          user: repo.url.split('/')[1],
          name: repo.url.split('/')[2],
          description: repo.description ? repo.description.trim() : null,
          stars: parseInt(repo.stars),
          language: repo.language ? repo.language.trim() : null
        })
      })
    })
    .then(() => data)
}

function * loadGithub () {
  try {
    let repos = yield call(fetchGithub)
    yield put({ type: 'FETCH_GITHUB_SUCCESS', payload: repos })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

const fetchV2exTopic = id => {
  const ret = { topicInfo: {}, replies: [] }
  let url = `${V2EX_BASE_URL}/topics/show.json?id=${id}`
  let repliesUrl = `${V2EX_BASE_URL}/replies/show.json?topic_id=${id}`
  return axios
    .get(url)
    .then(res => {
      ret.topicInfo = res.data[0]
      return axios.get(repliesUrl)
    })
    .then(res => {
      ret.replies = res.data
    })
    .then(() => {
      return ret
    })
}

function * loadV2exTopic (id) {
  try {
    let topic = yield call(fetchV2exTopic, id)
    yield put({ type: 'FETCH_V2EX_TOPIC_SUCCESS', payload: topic })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

const fetchV2exTopics = contentType => {
  let url = ''
  switch (contentType) {
    case 'latest':
      url = `${V2EX_BASE_URL}/topics/latest.json`
      break
    default:
      url = `${V2EX_BASE_URL}/topics/show.json?node_name=${contentType}`
      break
  }
  return axios.get(url).then(res => res.data)
}

function * loadV2exTopics (contentType) {
  try {
    let topics = yield call(fetchV2exTopics, contentType)
    yield put({
      type: 'FETCH_V2EX_TOPICS_SUCCESS',
      payload: { topics, contentType }
    })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

const fetchV2exHot = () => {
  let url = `${V2EX_BASE_URL}/topics/hot.json`
  return axios.get(url).then(res => res.data)
}

function * loadV2exHot () {
  try {
    let topics = yield call(fetchV2exHot)
    yield put({
      type: 'FETCH_V2EX_HOT_SUCCESS',
      payload: { topics }
    })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

/**
 * Older Version Watchers : cannot prevent fetch waste
 */
export function * watchLoadV2exTopic () {
  const v2exTopicTask = yield takeLatest('LOAD_V2EX_TOPIC', loadV2exTopic)
}

export function * watchLoadV2exTopics () {
  const v2exTopicsTask = yield takeLatest('LOAD_V2EX_TOPICS', loadV2exTopics)
}

export function * watchLoadV2exHot () {
  const v2exHotTask = yield takeLatest('LOAD_V2EX_HOT', loadV2exHot)
}

export function * watchLoadGitHub () {
  const githubTask = yield takeLatest('LOAD_GITHUB', loadGithub)
}

/**
 * Newest Version Watchers: Effectively eliminate waste of fetch
 */
export function * watchLoadHackerNews () {
  const hackerNewsTask = yield takeLatest(
    'LOAD_HACKERNEWS',
    loadHackerNewsData
  )
}

export function * watchV2exTopic () {
  let action
  while (action = yield take('LOAD_V2EX_TOPIC')) {
    console.log(action.id)
    const v2exTopicTask = yield fork(loadV2exTopic, action.id)
    yield take('STOP_FETCH')
    console.log('cancel')
    yield cancel(v2exTopicTask)
  }
}

export function * watchV2exTopics () {
  let action // we need the 'contentType' from action as argument passed to worker.
  while ((action = yield take('LOAD_V2EX_TOPICS'))) {
    const v2exTopicsTask = yield fork(loadV2exTopics, action.contentType)
    yield take('STOP_FETCH')
    console.log('cancel')
    yield cancel(v2exTopicsTask)
  }
}

export function * watchV2exHot () {
  while (yield take('LOAD_V2EX_HOT')) {
    const v2exHotTask = yield fork(loadV2exHot)
    yield take('STOP_FETCH')
    console.log('cancel')
    yield cancel(v2exHotTask)
  }
}

export function * watchHackerNews () {
  while (yield take('LOAD_HACKERNEWS')) {
    const hackNewsTask = yield fork(loadHackerNewsData)
    yield take('STOP_FETCH')
    yield cancel(hackNewsTask)
  }
}

export function * watchGithub () {
  while (yield take('LOAD_GITHUB')) {
    const githubTask = yield fork(loadGithub)
    yield take('STOP_FETCH')
    yield cancel(githubTask)
  }
}
