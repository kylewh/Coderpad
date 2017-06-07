import React, { Component } from "react";
import { connect } from "react-redux";
/** Actions && Selectors */
import { makeSelectV2exTopics } from "../../selector";
/** Tools */
import PropTypes from "prop-types";
/** Third Party Components */
import ContentLoader from "react-content-loader";
/** Child Components */
import TopicInfo from "./TopicInfo";
/** styled-components */
import Panel from "../styled/Panel";
import PHeading from "../styled/PHeading";
import PBody from "../styled/PBody";
import Tab from "../styled/Tab";

class Main extends Component {
  static propTypes = {
    location: PropTypes.object,
    stopFetch: PropTypes.func,
    loadV2exTopics: PropTypes.func,
    topics: PropTypes.array
  };

  componentDidMount() {
    this.props.stopFetch();
    const nodeName = new URLSearchParams(this.props.location.search).get("tab");
    const contentType = nodeName ? nodeName : "programmer";
    this.props.loadV2exTopics(contentType);
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
    dispatch({ type: "LOAD_V2EX_TOPICS", contentType }),
  stopFetch: () => dispatch({ type: "STOP_FETCH" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
