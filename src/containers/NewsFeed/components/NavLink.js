import React, { PureComponent } from "react";
/** Tools */
import PropTypes from "prop-types";
/** Child Components */
import { HackerNewsIcon, GitHubIcon, V2exIcon } from "./Icon";
/** Styled Components */
import LINK from "../styled/LINK";
/** Material Components */
import { BottomNavigationItem } from "material-ui/BottomNavigation";

class NavLink extends PureComponent {
  static propTypes = {
    filter: PropTypes.string
  };

  mapFilterToItemConfig = filter => {
    switch (filter) {
      case "hackernews":
        return {
          icon: <HackerNewsIcon />
        };
      case "github":
        return {
          icon: <GitHubIcon />
        };
      case "v2ex":
        return {
          icon: <V2exIcon />
        };
    }
  };

  render() {
    const { filter } = this.props;
    const { label, icon } = this.mapFilterToItemConfig(filter);
    return (
      <LINK
        to={!filter ? "/news/hackernews" : `/news/${filter}`}
        activeClassName={"btn-active"}
      >
        <BottomNavigationItem label={label} icon={icon} />
      </LINK>
    );
  }
}

export default NavLink;
