import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import classNames from "classnames";
import Immutable from "immutable";
import FileItem from "./fileItem";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";

const UL = styled.ul`
  width: 100%;
`;

class BrowseFileModal extends Component {
  constructor(props) {
    super(props);
    this.oSavedFiles = this.props.savedFiles.toJS();
  }

  componentWillMount() {
    this.props.loadLocalFiles();
  }

  mockSubmit = e => {
    e.keyCode === 13 && this.handleSave();
  };

  renderFileList = () => {
    return Object.keys(this.oSavedFiles).map(item => (
      <FileItem
        key={this.oSavedFiles[item]}
        fileName={item.substr(9)}
        content={this.oSavedFiles[item]}
      />
    ));
  };

  render() {
    const { isBrowsing, toggleBrowse, savedFiles } = this.props;
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={toggleBrowse}
      />
    ];
    return (
      <div>
        <Dialog
          title="File List"
          actions={actions}
          modal={false}
          open={isBrowsing}
          autoScrollBodyContent={true}
          onRequestClose={this.handleClose}
          contentStyle={{
            width: "50vw"
          }}
          bodyStyle={{
            display: "flex",
            justifyContent: "center"
          }}
          titleStyle={{
            fontWeight: "300"
          }}
        >
          <UL>
            {Object.keys(this.oSavedFiles).length
              ? renderFileList()
              : <span>You haven't saved any file yet :)</span>}
          </UL>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isBrowsing: makeSelectIsBrowsing(state),
  savedFiles: makeSelectSavedFiles(state)
});

BrowseFileModal.propTypes = {
  isBrowsing: PropTypes.bool,
  toggleBrowse: PropTypes.func,
  savedFiles: PropTypes.object,
  loadLocalFiles: PropTypes.func
};

export default connect()(BrowseFileModal);
