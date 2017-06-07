import React, { PureComponent } from "react";
/** Tools */
import PropTypes from "prop-types";
import styled from "styled-components";
/** Styled Components */
import LI from "../styled/LI";
/** Material Components */
import TextField from "material-ui/TextField";
import deleteBtn from "material-ui/svg-icons/action/delete";
import Download from "material-ui/svg-icons/content/archive";

const Delete = styled(deleteBtn)`
  align-items: flex-end;
`;

class FileItem extends PureComponent {
  static propTypes = {
    fileName: PropTypes.string,
    content: PropTypes.string,
    openFile: PropTypes.func,
    toggleBrowse: PropTypes.func,
    removeFile: PropTypes.func
  };
  destroyClickedElement = event => {
    document.body.removeChild(event.target);
  };

  saveTextAsFile = (text, filename) => {
    var textFileAsBlob = new Blob([text], { type: "text/plain" });
    var downloadLink = document.createElement("a");
    downloadLink.download = filename + ".md";
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked
      // without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      // Firefox requires the link to be added to the DOM
      // before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = this.destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
    downloadLink.click();
  };

  downloadFile = () => {
    this.saveTextAsFile(this.props.content, this.props.fileName.substr(9));
  };

  render() {
    const {
      fileName,
      content,
      openFile,
      toggleBrowse,
      removeFile
    } = this.props;

    return (
      <LI>
        <span
          onClick={() => {
            openFile(fileName);
            toggleBrowse();
          }}
        >
          {fileName.substr(9)}
        </span>
        <Delete onClick={() => removeFile(fileName)} />
        <Download onClick={this.downloadFile} />
      </LI>
    );
  }
}

export default FileItem;
