import React from 'react'
import FileItem from './fileItem'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const UL = styled.ul`
  width: 100%;
`

const FileList = ({ savedFiles, openFile, toggleBrowse, removeFile }) => {
  return (
    <UL>
      {Object.keys(savedFiles).map((item, idx) => (
        <FileItem
          key={item + idx}
          fileName={item}
          content={savedFiles[item]}
          openFile={openFile}
          toggleBrowse={toggleBrowse}
          removeFile={removeFile}
        />
      ))}
    </UL>
  )
}

FileList.propTypes = {
  savedFiles: PropTypes.object,
  openFile: PropTypes.func,
  toggleBrowse: PropTypes.func,
  removeFile: PropTypes.func
}

export default FileList
