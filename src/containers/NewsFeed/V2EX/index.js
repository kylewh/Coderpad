import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { makeSelectV2exTopics, makeSelectV2exHot } from "../selector";
/** Child Components */
import Hot from "./Hot";
import Main from "./Main";
import UserInfo from "./UserInfo";
import Topic from "./Topic";
import ContentLoader from "react-content-loader";
/** Styled Components */
import Container from "./styled/Container";
import Row from "./styled/Row";

const NoPaddingXS = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

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

const Background = styled.div`
    background: #e2e2e2;
    padding-top: 20px;
    flex-grow: 1;
    heigth: auto;
    &:before {
      display: table;
      content: " ";
    }

`;

class V2EX extends PureComponent {
  static propTypes = {
    match: PropTypes.object,
    location: PropTypes.object
  };

  render() {
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
