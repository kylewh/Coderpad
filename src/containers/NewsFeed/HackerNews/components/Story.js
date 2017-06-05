import React, { PureComponent } from "react";
/** Tools */
import styled from "styled-components";
import PropTypes from "prop-types";
/** Styled Components */
import Wrapper from "../styled/Wrapper";
import A from "../styled/A";
import Header from "../styled/Header";
import Footer from "../styled/Footer";
import FooterItem from "../styled/FooterItem";

class Story extends PureComponent {
  static propTypes = {
    story: PropTypes.object
  };

  render() {
    const { by, id, commentCount, title, points, url, ago } = this.props.story;

    const Points = styled(FooterItem)`
      color: #757575;
    `;

    const By = styled(FooterItem)`
      &, & a {
        color: #607D8B !important;
      }
      & a {
        font-weight: 500;
      }
    `;

    const TimeStamp = styled(FooterItem)`
      color: #009688;
      margin-right: 1rem;
    `;

    return (
      <Wrapper>
        <Header>
          <A
            href={url || "https://news.ycombinator.com/item?id=" + id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </A>
        </Header>
        <Footer>
          <FooterItem>
            <By>
              By&nbsp;
              <A href={"https://news.ycombinator.com/user?id=" + by}>
                {by}
              </A>
            </By>
            <TimeStamp>{ago}</TimeStamp>
            <Points>
              {points} points{" "}
            </Points>
          </FooterItem>
          <FooterItem>
            <A
              href={"https://news.ycombinator.com/item?id=" + id}
              target="_blank"
            >
              {commentCount}
              {" "}
              {commentCount === 1 ? "Comment" : "Comments"}
            </A>
          </FooterItem>
        </Footer>
      </Wrapper>
    );
  }
}

export default Story;
