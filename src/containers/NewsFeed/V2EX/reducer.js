import Immutable from "immutable";
import { combineReducers } from "redux-immutable";
import * as actions from "../../App/constant";

const v2ex = (
  state = Immutable.fromJS({
    topics: [],
    hot: [],
    topic: {
      topicInfo: {},
      replies: []
    }
  }),
  action
) => {
  switch (action.type) {
    case actions.FETCH_V2EX_TOPIC_SUCCESS:
      return state.set(
        "topic",
        Immutable.fromJS({
          topicInfo: action.payload.topicInfo,
          replies: action.payload.replies
        })
      );
    case actions.FETCH_V2EX_TOPICS_SUCCESS:
      return state.set("topics", Immutable.List(action.payload.topics));
    case actions.FETCH_V2EX_HOT_SUCCESS:
      return state.set("hot", Immutable.List(action.payload.topics));
    case actions.CLEAN_TOPIC_CACHE:
      return state.set(
        "topic",
        Immutable.Map({
          topicInfo: Immutable.Map({}),
          replies: Immutable.List([])
        })
      );
    default:
      return state;
  }
};

export default v2ex;
