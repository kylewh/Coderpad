import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import Immutable from "immutable";
import { makeSelectIsBrowsing, makeSelectSavedFiles } from "./selector";
import { loadLocalFiles } from "./action";
import FileItem from "./fileItem";

class BrowseFile extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadLocalFiles();
  }

  render() {
    const { isBrowsing } = this.props;
    const browseCls = classNames({
      "hidden-toggle": !isBrowsing
    });
    const oSavedFiles = this.props.savedFiles.toJS();
    return (
      <div className={browseCls}>
        <ul>
          {Object.keys(oSavedFiles).map(item => (
            <FileItem
              key={oSavedFiles[item]}
              fileName={item.substr(9)}
              content={oSavedFiles[item]}
            />
          ))}
        </ul>
      </div>
    );
  }
}

BrowseFile.propTypes = {
  savedFiles: PropTypes.object,
  isBrowsing: PropTypes.bool,
  loadLocalFiles: PropTypes.func
};

const mapStateToProps = state => ({
  isBrowsing: makeSelectIsBrowsing(state),
  savedFiles: makeSelectSavedFiles(state)
});

export default connect(mapStateToProps, { loadLocalFiles })(BrowseFile);
