import React, { Component } from "react";
import { connect } from "react-redux";
/** Actions && Selectors */
import { makeSelectV2exReplies, makeSelectV2exTopicInfo } from "../../selector";
/** Tools */
import styled from "styled-components";
import PropTypes from "prop-types";
/** Child Components */
import Replies from "./Replies";
import Content from "./Content";

class Topic extends Component {
  static propTypes = {
    match: PropTypes.object,
    topic: PropTypes.object,
    replies: PropTypes.array,
    cleanCache: PropTypes.func,
    loadV2exTopic: PropTypes.func
  };

  componentWillMount() {
    this.props.cleanCache();
  }
  
  componentDidMount() {
    this.props.loadV2exTopic(this.props.match.params.id);
  }

  render() {
    const { topic, replies } = this.props;
    const isEmpty = topic.id === -1; // Guarantee Flag
    return (
      <div>
        {!isEmpty
          ? <div>
              <Content topic={topic} />
              <Replies replies={replies} />
            </div>
          : <p>Seems we cannot fetch the topics, check out later :(</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topic: makeSelectV2exTopicInfo(state),
  replies: makeSelectV2exReplies(state)
});

const mapDispatchToProps = dispatch => ({
  loadV2exTopic: id => dispatch({ type: "LOAD_V2EX_TOPIC", id }),
  cleanCache: () => dispatch({ type: "CLEAN_TOPIC_CACHE" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
