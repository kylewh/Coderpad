import React, { Component, PureComponent } from "react";
/** Tools */
import PropTypes from "prop-types";
/** Styled Components */
import HeaderConatiner from "../styled/HeaderContainer";
/** Material Components */
import { BottomNavigation } from "material-ui/BottomNavigation";
/** Child Components */
import NavLink from "./NavLink";

class Header extends PureComponent {
  // if we don't receive location as paramter, the PureComponent's shouldComponnetUpdate will block the actual location change, so the NavLink won't work correctly
  static propTypes = {
    location: PropTypes.func
  };
  render() {
    return (
      <HeaderConatiner>
        <BottomNavigation>
          <NavLink filter="v2ex" />
          <NavLink filter="hackernews" />
          <NavLink filter="github" />
        </BottomNavigation>
      </HeaderConatiner>
    );
  }
}

export default Header;
