import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
/** Tools */
import styled from "styled-components";
import PropTypes from "prop-types";
/** Styled Components */
import IMG from "../styled/IMG";
import { Card, CardLeft, CardBody } from "../styled/Cards";

const HotItem = styled(Card)`
  padding: 10px;
  overflow: hidden;
  zoom: 1;
`;

const SmallImg = styled(IMG)`
  width: 24px;
  height: 24px;
`;

const HotItemBody = styled(CardBody)`
 & a.title {
  font-size: 13px;
  line-height: 120%;
  margin-bottom: 0;
 }
`;

class HotTopic extends PureComponent {
  static propTypes = {
    hotTopic: PropTypes.object
  };
  render() {
    const { id, member, title } = this.props.hotTopic;
    return (
      <HotItem>
        <CardLeft>
          <span style={{ display: "table-cell", verticalAlign: "middle" }}>
            <SmallImg src={member.avatar_large} role="presentation" />
          </span>
        </CardLeft>
        <HotItemBody>
          <Link className="title" to={`/news/v2ex/t/${id}`}>
            {title}
          </Link>
        </HotItemBody>
      </HotItem>
    );
  }
}

export default HotTopic;
