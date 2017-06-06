import React, { PureComponent } from "react";
/** Tools */
import styled from "styled-components";
import PropTypes from "prop-types";
/** Helper */
import { date } from "../format";
/**Styled Component */
import { Card, CardLeft, CardBody } from "../styled/Cards";
import IMG from "../styled/IMG";
import MarkDown from "../styled/MarkDown";

const ReplyBody = styled(CardBody)`
  & .info {
    margin-bottom: 6px;
  }
  & .info .name {
    font-weight: 700;
    padding-right: 5px;
    font-size: 13px;
  }
  & .info .ago {
    color: #bbb;
  }
`;

const ReplyContent = styled(MarkDown)`
  max-width: 1100px;
  margin: 0 auto;
  & span img {
    width: 100%;
  }
`;

class ReplyItem extends PureComponent {
  static propTypes = {
    reply: PropTypes.object
  };
  render() {
    const { member, created, content_rendered } = this.props.reply;

    return (
      <Card>
        <CardLeft>
          <a href="#">
            <IMG src={member.avatar_normal} role="presentation" />
          </a>
        </CardLeft>
        <ReplyBody>
          <div className="info">
            <span className="name">{member.username}</span>
            <span className="ago">{date(created)}</span>
          </div>
          <ReplyContent style={{ padding: "0" }}>
            <span dangerouslySetInnerHTML={{ __html: content_rendered }} />
          </ReplyContent>
        </ReplyBody>
      </Card>
    );
  }
}

export default ReplyItem;
