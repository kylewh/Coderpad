import React, { Component } from "react";
import { connect } from "react-redux";
/** Actions && Selectors */
import { makeSelectV2exHot } from "../../selector";
/** Tools */
import styled from "styled-components";
import PropTypes from "prop-types";
/**Child Components */
import HotItem from "./HotItem";
/**Styled Components */
import Panel from "../styled/Panel";
import PHeading from "../styled/PHeading";
import PBody from "../styled/PBody";

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
    loadHotTopics: PropTypes.func
  };

  componentDidMount() {
    this.props.loadHotTopics();
  }

  checkArrayEqual(arr1, arr2) {
    arr1.forEach((hotTopic, idx) => {
      if (hotTopic.content !== arr2[idx].content) {
        return false;
      }
    });
    return true;
  }

  shouldComponentUpdate(nextProps) {
    if (
      this.props.hotTopics.length &&
      this.checkArrayEqual(this.props.hotTopics, nextProps.hotTopics)
    ) {
      console.log(
        "%c Hot Topics remain unchanged",
        "color: #2196f3; font-weight: lighter; font-size: 20px"
      );
      return false;
    }
    return true;
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
  loadHotTopics: () => dispatch({ type: "LOAD_V2EX_HOT" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Hot);
