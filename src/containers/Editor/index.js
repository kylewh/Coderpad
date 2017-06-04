import React, { Component } from "react";
import { connect } from "react-redux";
import {
  makeSelectTextValue,
  makeSelectIsPreview,
  makeSelectIsSaving,
  makeSelectIsBrowsing,
  makeSelectSavedFiles
} from "./selector";
import * as editorActions from "./action";
import debounce from "lodash/debounce";
import marked from "marked";
import PropTypes from "prop-types";
import classNames from "classnames";
import Wrapper from "./Wrapper";
import AutoSizeTextarea from "./Textarea";
import EditorPanel from "./EditorPanel";
import Preview from "material-ui/svg-icons/action/visibility";
import Save from "material-ui/svg-icons/content/archive";
import SaveFileModal from "./SaveFileModal";
import BrowseFileModal from "./browseFileModal";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.onChange = debounce(this.onChange, 500);
  }

  componentWillMount() {
    // this._initHighLight();
    this.props.loadLocalFiles();
  }

  componentDidMount() {
    this.fillTextFromLocal();
    // Forced synchronization between state&LocalStorage
    this.props.editMarkdown(this.textarea.value);
  }

  // _initHighLight() {
  //   const hlScript = document.createElement("script");
  //   hlScript.type = "text/javascript";
  //   hlScript.src =
  //     "//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/highlight.min.js";
  //   document.getElementsByTagName("head")[0].appendChild(hlScript);
  //   hlScript.onload = function() {
  //     window.hljs.initHighlightingOnLoad();
  //     console.log(
  //       "%c HilghtJS initiaized",
  //       "color: #8bc34a; font-weight: bold;"
  //     );
  //   };
  // }

  loadLocal = () => {
    return localStorage.getItem("currentText");
  };

  fillTextFromLocal = () => {
    this.textarea.value = this.loadLocal()
      ? this.loadLocal()
      : this.props.textValue;
  };

  setTextFromFileName = filename => {
    this.textarea.value = localStorage.getItem(filename);
    localStorage.setItem("currentText", this.textarea.value);
    this.props.editMarkdown(this.textarea.value);
  };

  onChange = () => {
    const result = this.textarea.value;
    localStorage.setItem("currentText", result);
    this.props.editMarkdown(result);
  };

  mockSave = e => {
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
      e.preventDefault();
      this.props.toggleSaveFile();
    }
  };

  render() {
    const {
      isPreview,
      isSaving,
      savedFiles,
      removeFile,
      textValue,
      isBrowsing,
      editMarkdown,
      toggleSaveFile,
      loadLocalFiles,
      togglePreview,
      toggleBrowse,
      saveNewFile
    } = this.props;
    console.log(removeFile);
    const markdownCls = classNames({
      "hidden-toggle": isPreview || isBrowsing,
      markdown: true
    });

    const previewCls = classNames({
      "hidden-toggle": !isPreview,
      markdown: true
    });

    const browseCls = classNames({
      "hidden-toggle": !isBrowsing
    });

    return (
      <Wrapper>
        {/* Markdown -Editor */}
        <AutoSizeTextarea
          className={markdownCls}
          inputRef={node => (this.textarea = node)}
          onChange={this.onChange}
          onKeyDown={this.mockSave}
        />
        {/* Preview -Overlay*/}
        <div
          className={previewCls}
          dangerouslySetInnerHTML={{
            __html: marked(textValue)
          }}
        />
        <div />
        {/* Editor tools panel - Aside */}
        <EditorPanel
          togglePreview={togglePreview}
          toggleSaveFile={toggleSaveFile}
          toggleBrowse={toggleBrowse}
          isBrowsing={isBrowsing}
          isPreview={isPreview}
          isSaving={isSaving}
        />
        {/* Modal: enter filename */}
        <SaveFileModal
          isSaving={isSaving}
          onSave={saveNewFile}
          onCancel={toggleSaveFile}
          textValue={textValue}
        />
        <BrowseFileModal
          isBrowsing={isBrowsing}
          toggleBrowse={toggleBrowse}
          savedFiles={savedFiles.toJS()}
          openFile={this.setTextFromFileName}
          removeFile={removeFile}
        />
      </Wrapper>
    );
  }
}

Editor.propTypes = {
  textValue: PropTypes.string,
  togglePreview: PropTypes.func,
  isPreview: PropTypes.bool,
  isSaving: PropTypes.bool,
  isBrowsing: PropTypes.bool,
  editMarkdown: PropTypes.func,
  toggleSaveFile: PropTypes.func,
  loadLocalFiles: PropTypes.func,
  toggleBrowse: PropTypes.func,
  saveNewFile: PropTypes.func,
  removeFile: PropTypes.func,
  savedFiles: PropTypes.object
};

const mapStateToProps = state => ({
  textValue: makeSelectTextValue(state),
  isPreview: makeSelectIsPreview(state),
  isSaving: makeSelectIsSaving(state),
  isBrowsing: makeSelectIsBrowsing(state),
  savedFiles: makeSelectSavedFiles(state)
});

export default connect(mapStateToProps, editorActions)(Editor);
