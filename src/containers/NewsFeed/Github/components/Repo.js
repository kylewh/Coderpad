import React, { PureComponent } from "react";
/** Tools */
import PropTypes from "prop-types";
/** Styled Components */
import LI from "../styled/LI";
import DescriptionWrapper from "../styled/DescriptionWrapper";
import Title from "../styled/Title";
import Des from "../styled/Des";
import SideWrapper from "../styled/SideWrapper";
import SideItem from "../styled/SideItem";

class Repo extends PureComponent {
  static propTypes = {
    repo: PropTypes.object
  };
  render() {
    const { stars, url, description, language, user, name } = this.props.repo;
    return (
      <LI>
        <DescriptionWrapper>
          <Title><a href={url}>{user}/{name}</a></Title>
          <Des>{description || "No description"}</Des>
        </DescriptionWrapper>
        <SideWrapper>
          <SideItem>
            {language || "Null"}
          </SideItem>
          <SideItem>
            ★{stars}
          </SideItem>
        </SideWrapper>
      </LI>
    );
  }
}

export default Repo;
