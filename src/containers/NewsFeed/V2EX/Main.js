import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import ContentLoader from "react-content-loader";
import { makeSelectV2exTopics } from "../selector";
/** Child Components */
import TopicInfo from "./TopicInfo";
/** styled-components */
import Panel from "./styled/Panel";
import PHeading from "./styled/PHeading";
import PBody from "./styled/PBody";
import Tab from "./styled/Tab";

class Main extends Component {
  static propTypes = {
    location: PropTypes.object,
    loadV2exTopics: PropTypes.func,
    topics: PropTypes.array,
    hotTopics: PropTypes.array
  };

  componentDidMount() {
    this.props.loadV2exTopics("programmer");
  }

  componentDidUpdate(prevProps) {
    const nodeName = new URLSearchParams(this.props.location.search).get("tab");
    const contentType = nodeName ? nodeName : "programmer";
    if (prevProps.location.search !== this.props.location.search) {
      this.props.loadV2exTopics(contentType);
    }
  }

  render() {
    const { topics } = this.props;
    return (
      <Panel>
        <PHeading className="panel-heading">
          <Tab className="tab" to={"?tab=programmer"}>程序员</Tab>
          <Tab className="tab" to="?tab=python">Python</Tab>
          <Tab className="tab" to="?tab=js">JavaScript</Tab>
          <Tab className="tab" to="?tab=create">分享创造</Tab>
          <Tab className="tab" to="?tab=nodejs">Node.js</Tab>
          <Tab className="tab" to="?tab=jobs">酷工作</Tab>
          <Tab className="tab" to="?tab=hot">最热</Tab>
          <Tab className="tab" to="?tab=latest">最新</Tab>
        </PHeading>
        <PBody className="panel-body">
          {topics.length
            ? topics.map(topic => <TopicInfo topic={topic} key={topic.id} />)
            : <ContentLoader
                type="facebook"
                style={{ alignSelf: "flex-start", width: "50vw" }}
              />}
        </PBody>
      </Panel>
    );
  }
}

const mapStateToProps = state => ({
  topics: makeSelectV2exTopics(state).toArray()
});

const mapDispatchToProps = dispatch => ({
  loadV2exTopics: contentType =>
    dispatch({ type: "LOAD_V2EX_TOPICS", contentType })
  // loadV2exTopic: id => dispatch({ type: "LOAD_V2EX_TOPIC", id })
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
