import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import { makeSelectV2exHot } from "../selector";
/**Child Components */
import HotItem from "./HotItem";
/**Styled Components */
import Panel from "./styled/Panel";
import PHeading from "./styled/PHeading";
import PBody from "./styled/PBody";



const HotPanel = styled(Panel)`
  & .fade {
    opacity: 100;
    color: #ccc;
    margin: 0;
  }
`;

class Hot extends Component {
  static propTypes = {
    hotTopics: PropTypes.array,
    loadV2exTopics: PropTypes.func
  };

  componentDidMount() {
    this.props.loadV2exTopics("hot");
  }

  render() {
    return (
      <HotPanel>
        <PHeading>
          <p className="fade">今日热议主题</p>
        </PHeading>
        <PBody>
          {this.props.hotTopics &&
            this.props.hotTopics.map(hotTopic => (
              <HotItem hotTopic={hotTopic} key={hotTopic.id} />
            ))}
        </PBody>
      </HotPanel>
    );
  }
}

const mapStateToProps = state => ({
  hotTopics: makeSelectV2exHot(state).toArray()
});

const mapDispatchToProps = dispatch => ({
  loadV2exTopics: contentType =>
    dispatch({ type: "LOAD_V2EX_TOPICS", contentType })
});

export default connect(mapStateToProps, mapDispatchToProps)(Hot);
