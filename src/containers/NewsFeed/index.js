/* eslint-disable */
import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Container from "./Container";
import Header from "./Header";
import axios from "axios";
import HackerNews from "./HackerNews";
import Github from "./Github/index";
import V2EX from "./V2EX/index";
import GoTop from "../../components/GoTop";

const NewsFeed = ({ match }) => {
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
};

export default NewsFeed;
