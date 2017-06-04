import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { pluralize, date } from './format'
import IMG from "./styled/IMG";
import Badge from "./styled/Badge";
import {
  Card,
  CardContent,
  CardLeft,
  TopicCardBody,
  CardRight
} from "./styled/Cards";


class Topic extends PureComponent {
  static propTypes = {
    topic: PropTypes.object
  };
  
  render() {
    const { id, title, member, replies, node, created } = this.props.topic;
    return (
      <Card>
        <CardLeft>
          <img src={member.avatar_normal} role="presentation" />
        </CardLeft>
        <TopicCardBody>
          <Link className="title" to={`/news/v2ex/t/${id}`}>{title}</Link>
          <div className="info">
            <a className="separator" href={node.url}>{node.title}</a>
            •
            <strong>
              <a className="separator" href="#">{member.username}</a>
            </strong>
            •
            <span className="separator">{date(created)}</span>
          </div>
        </TopicCardBody>
        <CardRight>
          <Badge>{replies}</Badge>
        </CardRight>
      </Card>
    );
  }
}

export default Topic;
