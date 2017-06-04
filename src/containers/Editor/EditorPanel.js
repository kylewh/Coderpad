import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import Preview from 'material-ui/svg-icons/action/visibility'
import Save from 'material-ui/svg-icons/content/save'
import File from 'material-ui/svg-icons/file/folder-open'

const UL = styled.ul`
  position: fixed;
  top: calc(15vh - 15px);
  right: 0;
  display: flex;
  padding-right: 3vw;
  flex-direction: column;
  & svg {
    height: 30px !important;
    width: 30px !important;
    fill: #eee !important;
    cursor: pointer;
    margin: 10px 0;
  }

  & svg:hover {
    fill: #B0BEC5 !important;
  }

  & svg.active {
    fill: #78909c !important;
  }
`

const EditorPanel = ({
  toggleBrowse,
  togglePreview,
  toggleSaveFile,
  isBrowsing,
  isPreview,
  isSaving
}) => {
  const previewIconCls = classNames({ active: isPreview })
  const saveIconCls = classNames({ active: isSaving })
  const browseIconCls = classNames({ active: isBrowsing })
  return (
    <UL>
      <Preview className={previewIconCls} onClick={togglePreview} />
      <Save className={saveIconCls} onClick={toggleSaveFile} />
      <File className={browseIconCls} onClick={toggleBrowse} />
    </UL>
  )
}

EditorPanel.propTypes = {
  toggleBrowse: PropTypes.func,
  togglePreview: PropTypes.func,
  toggleSaveFile: PropTypes.func,
  isBrowsing: PropTypes.bool,
  isPreview: PropTypes.bool,
  isSaving: PropTypes.bool
}

export default EditorPanel
