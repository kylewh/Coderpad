import {
  call,
  put,
  select,
  take,
  takeLatest,
  takeEvery
} from "redux-saga/effects";
import axios from "axios";
import moment from "moment";

const HACKERNEWS_BASE_URL = "https://hacker-news.firebaseio.com/v0";
const wrapApiKey = "vZpCx0QXD65gAcUD4Q7gAL6y0GQB1pgT";
const GITHUB_BASE_URL =
  "https://wrapapi.com/use/sunnysingh/github/trending/0.0.4?wrapAPIKey=" +
  wrapApiKey;
// const V2EX_BASE_URL = "https://www.v2ex.com/api";
const V2EX_BASE_URL = "/news/v2ex";

/**
 * 30 top stories from hackerNews
 */
const fetchHackerNews = () => {
  const HACKERNEWS_BASE_URL = "https://hacker-news.firebaseio.com/v0";
  const data = [];
  return axios
    .get(HACKERNEWS_BASE_URL + "/topstories.json")
    .then(res =>
      res.data
        .slice(0, 30)
        .map(storyId =>
          axios.get(HACKERNEWS_BASE_URL + "/item/" + storyId + ".json")
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
          });
        });
      });
    })
    .then(() => {
      console.log("resolved data");
      return data;
    });
};

function* loadHackerNewsData() {
  try {
    let stories = yield call(fetchHackerNews);
    yield put({ type: "FETCH_HACKERNEWS_SUCCESS", payload: stories });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

const fetchGithub = () => {
  const data = [];
  return axios
    .get(GITHUB_BASE_URL)
    .then(res => {
      res.data.data.repositories.map(repo => {
        data.push({
          url: "https://github.com" + repo.url,
          user: repo.url.split("/")[1],
          name: repo.url.split("/")[2],
          description: repo.description ? repo.description.trim() : null,
          stars: parseInt(repo.stars),
          language: repo.language ? repo.language.trim() : null
        });
      });
    })
    .then(() => data);
};

function* loadGithub() {
  try {
    let repos = yield call(fetchGithub);
    yield put({ type: "FETCH_GITHUB_SUCCESS", payload: repos });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

const fetchV2exTopic = id => {
  const ret = { topicInfo: {}, replies: [] };
  let url = `${V2EX_BASE_URL}/topics/show.json?id=${id}`,
    repliesUrl = `${V2EX_BASE_URL}/replies/show.json?topic_id=${id}`;
  console.log(url);
  return axios
    .get(url)
    .then(res => {
      ret.topicInfo = res.data[0];
      return axios.get(repliesUrl);
    })
    .then(res => {
      ret.replies = res.data;
    })
    .then(() => ret);
};

function* loadV2exTopic({ id }) {
  try {
    let topic = yield call(fetchV2exTopic, id);
    yield put({ type: "FETCH_V2EX_TOPIC_SUCCESS", payload: topic });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

const fetchV2exTopics = contentType => {
  let url = "";
  switch (contentType) {
    case "hot":
      url = `${V2EX_BASE_URL}/topics/hot.json`;
      break;
    case "latest":
      url = `${V2EX_BASE_URL}/topics/latest.json`;
      break;
    default:
      url = `${V2EX_BASE_URL}/topics/show.json?node_name=${contentType}`;
      break;
  }
  console.log(`fetch url: ${url}`);
  return axios.get(url).then(res => res.data);
};

function* loadV2exTopics({ contentType }) {
  try {
    let topics = yield call(fetchV2exTopics, contentType);
    yield put({
      type: "FETCH_V2EX_TOPICS_SUCCESS",
      payload: { topics, contentType } // LOL~ so we can know whether it's hot or normal topics
    });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

function* loadV2exHot({ contentType }) {
  try {
    let topics = yield call(fetchV2exHot, contentType);
    yield put({
      type: "FETCH_V2EX_TOPICS_SUCCESS",
      payload: { topics, contentType } // LOL~ so we can know whether it's hot or normal topics
    });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

export function* watchLoadV2exTopic() {
  yield takeLatest("LOAD_V2EX_TOPIC", loadV2exTopic);
}

export function* watchLoadV2exTopics() {
  yield takeEvery("LOAD_V2EX_TOPICS", loadV2exTopics);
}

export function* watchLoadV2exHot() {
  yield takeLatest("LOAD_V2EX_HOT", loadV2exHot);
}

export function* watchLoadHackerNews() {
  yield takeLatest("LOAD_HACKERNEWS", loadHackerNewsData);
}

export function* watchLoadGitHub() {
  yield takeLatest("LOAD_GITHUB", loadGithub);
}
