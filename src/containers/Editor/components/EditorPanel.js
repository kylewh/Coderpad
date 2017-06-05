import React, { PureComponent } from "react";
/** Tools */
import PropTypes from "prop-types";
import classNames from "classnames";
/** Styled Components */
import UL from "../styled/UL";
/** Material Components */
import Preview from "material-ui/svg-icons/action/visibility";
import Save from "material-ui/svg-icons/content/save";
import File from "material-ui/svg-icons/file/folder-open";

class EditorPanel extends PureComponent {
  static propTypes = {
    toggleBrowse: PropTypes.func,
    togglePreview: PropTypes.func,
    toggleSaveFile: PropTypes.func,
    isBrowsing: PropTypes.bool,
    isPreview: PropTypes.bool,
    isSaving: PropTypes.bool
  };
  render() {
    const {
      toggleBrowse,
      togglePreview,
      toggleSaveFile,
      isBrowsing,
      isPreview,
      isSaving
    } = this.props;
    const previewIconCls = classNames({ active: isPreview });
    const saveIconCls = classNames({ active: isSaving });
    const browseIconCls = classNames({ active: isBrowsing });
    return (
      <UL>
        <Preview className={previewIconCls} onClick={togglePreview} />
        <Save className={saveIconCls} onClick={toggleSaveFile} />
        <File className={browseIconCls} onClick={toggleBrowse} />
      </UL>
    );
  }
}

export default EditorPanel;
