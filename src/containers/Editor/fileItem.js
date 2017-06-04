import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import TextField from 'material-ui/TextField'
import deleteBtn from 'material-ui/svg-icons/action/delete'
import Download from 'material-ui/svg-icons/content/archive'

const LI = styled.li`
  list-style: none;
  padding: 1rem;
  font-size: 1.6rem;
  font-family: Roboto, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: #f5f5f5;
  }
  & span {
    cursor: pointer;
    flex-grow: 1;
  }
  & svg {
    cursor: pointer;
    fill: #bdbdbd !important;
  }
  & svg:hover {
    fill: #607d8b !important;
  }
  & input {
    border: none!important;
  }
`

const Delete = styled(deleteBtn)`
  align-items: flex-end;
`

const FileItem = ({
  fileName,
  content,
  openFile,
  toggleBrowse,
  removeFile
}) => {
  const unPrefixFileName = fileName.substr(9)

  const destroyClickedElement = event => {
    document.body.removeChild(event.target)
  }

  const saveTextAsFile = (text, filename) => {
    var textFileAsBlob = new Blob([text], { type: 'text/plain' })
    var downloadLink = document.createElement('a')
    downloadLink.download = filename + '.md'
    downloadLink.innerHTML = 'Download File'
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked
      // without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob)
    } else {
      // Firefox requires the link to be added to the DOM
      // before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob)
      downloadLink.onclick = destroyClickedElement
      downloadLink.style.display = 'none'
      document.body.appendChild(downloadLink)
    }
    downloadLink.click()
  }

  const downloadFile = () => {
    saveTextAsFile(content, unPrefixFileName)
  }

  return (
    <LI>
      <span
        onClick={() => {
          openFile(fileName)
          toggleBrowse()
        }}
      >
        {unPrefixFileName}
      </span>
      <Delete onClick={() => removeFile(fileName)} />
      <Download onClick={downloadFile} />
    </LI>
  )
}

FileItem.propTypes = {
  fileName: PropTypes.string,
  content: PropTypes.string,
  openFile: PropTypes.func,
  toggleBrowse: PropTypes.func,
  removeFile: PropTypes.func
}

export default FileItem
