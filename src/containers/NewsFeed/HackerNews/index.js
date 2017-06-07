import React, { Component } from "react";
import { connect } from "react-redux";
/** Actions && Selectors */
import { makeSelectHackerNews } from "../selector";
/** Tools */
import styled from "styled-components";
import PropTypes from "prop-types";
/** Child Components */
import Story from "./components/Story";
/** Third Party Components */
import ContentLoader from "react-content-loader";
/** Styled Components */
import UL from "./styled/UL";

class HackerNews extends Component {
  static propTypes = {
    stopFetch: PropTypes.func,
    loadHackerNews: PropTypes.func,
    stories: PropTypes.array
  };
  componentDidMount() {
    this.props.stopFetch();
    this.props.loadHackerNews();
  }

  render() {
    return (
      <UL>
        <h2>HackerNews</h2>
        {!this.props.stories.length
          ? <ContentLoader
              type="facebook"
              style={{ alignSelf: "flex-start", width: "50vw" }}
            />
          : this.props.stories.map(story => (
              <Story story={story} key={story.id} />
            ))}
      </UL>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadHackerNews: () => dispatch({ type: "LOAD_HACKERNEWS" }),
  stopFetch: () => dispatch({ type: "STOP_FETCH" })
});

const mapStateToProps = state => ({
  stories: makeSelectHackerNews(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(HackerNews);
