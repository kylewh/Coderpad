import React, { PureComponent } from "react";
/** Tools */
import PropTypes from "prop-types";
/**Child Components */
import ReplyItem from "./ReplyItem";
/**Styled Components */
import Panel from "../styled/Panel";
import PHeading from "../styled/PHeading";
import PBody from "../styled/PBody";

class Replies extends PureComponent {
  static propTypes = {
    replies: PropTypes.array
  };
  render() {
    let count = this.props.replies.length;
    return (
      <Panel>
        <PHeading>
          <p style={{ color: "#bbb", margin: "0px" }}>共收到 {count} 条回复</p>
        </PHeading>
        <PBody>
          {this.props.replies.length
            ? this.props.replies.map(reply => (
                <ReplyItem reply={reply.toJS()} key={reply.toJS().id} />
              ))
            : ""}
        </PBody>
      </Panel>
    );
  }
}

export default Replies;
