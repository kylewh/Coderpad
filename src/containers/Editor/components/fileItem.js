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
    this.saveTextAsFile(content, unPrefixFileName);
  };

  render() {
    const {
      fileName,
      content,
      openFile,
      toggleBrowse,
      removeFile
    } = this.props;

    const unPrefixFileName = fileName.substr(9);
    const Delete = styled(deleteBtn)`
      align-items: flex-end;
    `;
    return (
      <LI>
        <span
          onClick={() => {
            openFile(fileName);
            toggleBrowse();
          }}
        >
          {unPrefixFileName}
        </span>
        <Delete onClick={() => removeFile(fileName)} />
        <Download onClick={this.downloadFile} />
      </LI>
    );
  }
}

// const FileItem = ({
//   fileName,
//   content,
//   openFile,
//   toggleBrowse,
//   removeFile
// }) => {
//   const unPrefixFileName = fileName.substr(9);

//   const destroyClickedElement = event => {
//     document.body.removeChild(event.target);
//   };

//   const saveTextAsFile = (text, filename) => {
//     var textFileAsBlob = new Blob([text], { type: "text/plain" });
//     var downloadLink = document.createElement("a");
//     downloadLink.download = filename + ".md";
//     downloadLink.innerHTML = "Download File";
//     if (window.webkitURL != null) {
//       // Chrome allows the link to be clicked
//       // without actually adding it to the DOM.
//       downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
//     } else {
//       // Firefox requires the link to be added to the DOM
//       // before it can be clicked.
//       downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
//       downloadLink.onclick = destroyClickedElement;
//       downloadLink.style.display = "none";
//       document.body.appendChild(downloadLink);
//     }
//     downloadLink.click();
//   };

//   const downloadFile = () => {
//     saveTextAsFile(content, unPrefixFileName);
//   };

//   return (
//     <LI>
//       <span
//         onClick={() => {
//           openFile(fileName);
//           toggleBrowse();
//         }}
//       >
//         {unPrefixFileName}
//       </span>
//       <Delete onClick={() => removeFile(fileName)} />
//       <Download onClick={downloadFile} />
//     </LI>
//   );
// };

// FileItem.propTypes = {
//   fileName: PropTypes.string,
//   content: PropTypes.string,
//   openFile: PropTypes.func,
//   toggleBrowse: PropTypes.func,
//   removeFile: PropTypes.func
// };

export default FileItem;
