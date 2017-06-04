import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ContentLoader from "react-content-loader";
import { date } from "./format";
/**Styled Components */
import Panel from "./styled/Panel";
import PHeading from "./styled/PHeading";
import PBody from "./styled/PBody";
import MarkDown from "./styled/MarkDown";
import PFooter from "./styled/PFooter";
import Chevron from "./styled/Chevron";
import H1 from "./styled/H1";
import { CardBody, TopicCardBody } from "./styled/Cards";

const TopicHead = styled(PHeading)`
  font-size: 14px;
  line-height: 120%;
`;

const HeadBody = styled(TopicCardBody)`
  text-align: left;
`;

const TopicTitle = styled(H1)`
  font-size: 24px;
  font-weight: 400;
  margin-top: 12px;
  margin-bottom: 8px;
`;

const TopicContent = styled(MarkDown)`
  padding: 10px;
  & span img {
    width: 100%;
  }
`;

class Content extends Component {
  static propTypes = {
    topic: PropTypes.object
  };
  render() {
    const { member, node, title, created, content_rendered } = this.props.topic;
    console.log(member);
    return (
      <div>
        {this.props.topic &&
          this.props.topic.id &&
          <Panel>
            <TopicHead>
              <div style={{ float: "right", textAlign: "right" }}>
                <img
                  style={{ borderRadius: "4px", verticalAlign: "middle" }}
                  src={member.avatar_large}
                  role="presentation"
                />
              </div>
              <HeadBody>
                <a href="/">V2EX</a>
                <Chevron>&nbsp;&nbsp;›&nbsp;&nbsp;</Chevron>
                <a href="#">{node.title}</a>
                <TopicTitle>{title}</TopicTitle>
                <div className="info">
                  <a className="separator" href={node.url}>
                    {node.title}
                  </a>
                  •
                  <strong>
                    <a href="#" className="separator">{member.username}</a>
                  </strong>
                  •
                  <span className="separator">{date(created)}</span>
                </div>
              </HeadBody>
            </TopicHead>
            <TopicContent>
              <span
                dangerouslySetInnerHTML={{
                  __html: content_rendered
                }}
              />
            </TopicContent>
            <PFooter>
              <a href="#" className="pf">加入收藏</a>
              <a href="#" className="pf">Tweet</a>
              <a href="#" className="pf">Weibo</a>
              <a href="#" className="pf">忽略主题</a>
              <a href="#" className="pf">感谢</a>
            </PFooter>
          </Panel>}
        {!this.props.topic.id &&
          <ContentLoader
            type="facebook"
            style={{ alignSelf: "flex-start", width: "50vw" }}
          />}
      </div>
    );
  }
}

export default Content;
