import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Route, Link, Switch } from "react-router-dom";
/** Actions && Selectors */
import { makeSelectV2exTopics, makeSelectV2exHot } from "../selector";
/** Tools */
import styled from "styled-components";
import PropTypes from "prop-types";
/** Child Components */
import Hot from "./components/Hot";
import Main from "./components/Main";
import UserInfo from "./components/UserInfo";
import Topic from "./components/Topic";
/** Third Party Components */
import ContentLoader from "react-content-loader";
/** Styled Components */
import Row from "./styled/Row";
import Container from "./styled/Container";
import Background from "./styled/Background";
import NoPaddingXS from "./styled/NoPaddingXS";

class V2EX extends PureComponent {
  static propTypes = {
    match: PropTypes.object,
    location: PropTypes.object
  };

  render() {
    const MainWrapper = styled(NoPaddingXS)`
      @media all and (min-width: 992px) {
        width: 75%;
        float: left;
      }
    `;

    const SideWrapper = styled(NoPaddingXS)`
      @media all and (min-width: 992px) {
        width: 25%;
        float: left;
      }
    `;

    return (
      <Background className="clearfix">
        <Container className="clearfix">
          <Row>
            <MainWrapper>
              <Switch>
                <Route
                  exact
                  path={`${this.props.match.url}/`}
                  render={props => <Main {...props} />}
                />
                <Route
                  path={`${this.props.match.url}/t/:id`}
                  component={Topic}
                />
              </Switch>
            </MainWrapper>
            <SideWrapper>
              <UserInfo />
              <Hot />
            </SideWrapper>
          </Row>
        </Container>
      </Background>
    );
  }
}

export default V2EX;
