import React, { PureComponent } from "react";
/** Tools */
import PropTypes from "prop-types";
/** Child Components */
import FileItem from "./fileItem";

class FileList extends PureComponent {
  static propTypes = {
    savedFiles: PropTypes.object,
    openFile: PropTypes.func,
    toggleBrowse: PropTypes.func,
    removeFile: PropTypes.func
  };

  render() {
    const { savedFiles, openFile, toggleBrowse, removeFile } = this.props;
    return (
      <ul style={{ width: "100%" }}>
        {Object.keys(savedFiles).map((item, idx) => {
          return (
            <FileItem
              key={item + idx}
              fileName={item}
              content={savedFiles[item]}
              openFile={openFile}
              toggleBrowse={toggleBrowse}
              removeFile={removeFile}
            />
          );
        })}
      </ul>
    );
  }
}

export default FileList;
