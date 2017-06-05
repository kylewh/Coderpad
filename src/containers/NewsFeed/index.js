/* eslint-disable */
import React, { PureComponent } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
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
    match: PropTypes.object
  };
  render() {
    const { match } = this.props;
    return (
      <Container>
        <Header />
        <GoTop style={{ zIndex: 1000 }} />
        <Redirect to={`${match.url}/v2ex`} />
        <Route path={`${match.url}/hackernews`} component={HackerNews} />
        <Route path={`${match.url}/github`} component={Github} />
        <Route path={`${match.url}/v2ex`} component={V2EX} />
      </Container>
    );
  }
}

export default NewsFeed;
