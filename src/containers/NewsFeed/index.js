import React, { PureComponent } from "react";
import { Route, Link } from "react-router-dom";
/** Tools */
import PropTypes from "prop-types";
/** Styled Components */
import Container from "./styled/Container";
/** Child Components */
import Header from "./components/Header";
/** Child Container Components */
import HackerNews from "./HackerNews/index";
import Github from "./Github/index";
import V2EX from "./V2EX/index";
/** Third Party Components */
import GoTop from "./components/GoTop";

class NewsFeed extends PureComponent {
  static propTypes = {
    location: PropTypes.object,
    match: PropTypes.object
  };
  render() {
    const { match } = this.props;
    return (
      <Container>
        <Header location={this.props.location} />
        <GoTop style={{ zIndex: 1000 }} />
        <Route path={`${match.url}/hackernews`} component={HackerNews} />
        <Route path={`${match.url}/github`} component={Github} />
        <Route path={`${match.url}/v2ex`} component={V2EX} />
      </Container>
    );
  }
}

export default NewsFeed;
