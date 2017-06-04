import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import classNames from 'classnames'
import Immutable from 'immutable'
import FileList from './fileList'
import FileItem from './fileItem'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'

const UL = styled.ul`
  width: 100%;
`

const BrowseFileModal = ({
  isBrowsing,
  toggleBrowse,
  savedFiles,
  openFile,
  removeFile
}) => {
  const actions = [
    <FlatButton
      label='OK'
      primary
      keyboardFocused
      onTouchTap={toggleBrowse}
    />
  ]

  return (
    <div>
      <Dialog
        title='File List'
        actions={actions}
        modal={false}
        open={isBrowsing}
        autoScrollBodyContent
        contentStyle={{
          width: '50vw'
        }}
        bodyStyle={{
          display: 'flex',
          justifyContent: 'center'
        }}
        titleStyle={{
          fontWeight: '300'
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
  )
}

BrowseFileModal.propTypes = {
  isBrowsing: PropTypes.bool,
  toggleBrowse: PropTypes.func,
  savedFiles: PropTypes.object,
  loadLocalFiles: PropTypes.func,
  openFile: PropTypes.func,
  removeFile: PropTypes.func
}

export default BrowseFileModal
