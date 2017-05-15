import React, { Component } from 'react'
import PropTypes from 'prop-types'
import V4 from 'uuid'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'

class SaveFileModal extends Component {

  constructor (props) {
    super(props)
  }

  handleSave = () => {
    const id = V4()
    const name = this.refs.input.getValue()
    const textValue = this.props.textValue
    this.props.onSave(id, name, textValue)
    this.props.onCancel()
  }


  render () {
    const { isSaving, onSave, onCancel, textValue } = this.props
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={true}
        onTouchTap={onCancel}
      />,
      <FlatButton
        label="Save"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSave}
      />
    ]
    return (
      <div>
        <Dialog
          title="Please enter the filename"
          actions={actions}
          modal={false}
          open={isSaving}
          onRequestClose={this.handleClose}
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
          <TextField
            hintText="filename"
            fullWidth={true}
            ref='input'
          />
        </Dialog>
      </div>
    )
  }
}

SaveFileModal.propTypes = {
  isSaving: PropTypes.bool,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  textValue: PropTypes.string
}

export default SaveFileModal
