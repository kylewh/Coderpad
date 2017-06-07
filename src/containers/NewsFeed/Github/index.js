import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import { makeSelectGithub } from "../selector";
import ContentLoader from "react-content-loader";
import Repo from "./components/Repo";
import UL from "./styled/UL";

class Github extends Component {
  static propTypes = {
    stopFetch: PropTypes.func,
    loadGithub: PropTypes.func,
    repos: PropTypes.array
  };
  componentDidMount() {
    this.props.stopFetch();
    this.props.loadGithub();
  }

  render() {
    return (
      <UL>
        <h2>Github Trending</h2>
        {!this.props.repos.length
          ? <ContentLoader
              type="facebook"
              style={{ alignSelf: "flex-start", width: "50vw" }}
            />
          : this.props.repos.map(repo => <Repo repo={repo} key={repo.url} />)}
      </UL>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadGithub: () => dispatch({ type: "LOAD_GITHUB" }),
  stopFetch: () => dispatch({ type: "STOP_FETCH" })
});

const mapStateToProps = state => ({
  repos: makeSelectGithub(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Github);
