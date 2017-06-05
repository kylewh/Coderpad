import React, { PureComponent } from "react";
import { connect } from "react-redux";
/** Tools */
import PropTypes from "prop-types";
/** Child Components */
import FileList from "./fileList";
import FileItem from "./fileItem";
/** Maerial Components */
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

class BrowseFileModal extends PureComponent {
  static propTypes = {
    isBrowsing: PropTypes.bool,
    toggleBrowse: PropTypes.func,
    savedFiles: PropTypes.object,
    loadLocalFiles: PropTypes.func,
    openFile: PropTypes.func,
    removeFile: PropTypes.func
  };

  render() {
    const {
      isBrowsing,
      toggleBrowse,
      savedFiles,
      openFile,
      removeFile
    } = this.props;

    const actions = [
      <FlatButton
        label="OK"
        primary
        keyboardFocused
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
          autoScrollBodyContent
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
          {Object.keys(savedFiles).length
            ? <FileList
                savedFiles={savedFiles}
                openFile={openFile}
                toggleBrowse={toggleBrowse}
                removeFile={removeFile}
              />
            : <span>You haven't saved any file yet :)</span>}
        </Dialog>
      </div>
    );
  }
}

export default BrowseFileModal;
