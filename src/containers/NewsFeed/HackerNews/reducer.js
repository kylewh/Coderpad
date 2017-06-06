import Immutable from "immutable";
import * as actions from "../../App/constant";

const hackerNews = (state = Immutable.List([]), action) => {
  switch (action.type) {
    case actions.FETCH_HACKERNEWS_SUCCESS:
      return (state = Immutable.List(action.payload));
    default:
      return state;
  }
};

export default hackerNews;
