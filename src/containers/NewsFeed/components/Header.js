import React, { PureComponent } from "react";
/** Tools */
import PropTypes from "prop-types";
/** Styled Components */
import HeaderConatiner from "../styled/HeaderContainer";
/** Material Components */
import { BottomNavigation } from "material-ui/BottomNavigation";
/** Child Components */
import NavLink from "./NavLink";

class Header extends PureComponent {
  static propTypes = {
    match: PropTypes.object
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
