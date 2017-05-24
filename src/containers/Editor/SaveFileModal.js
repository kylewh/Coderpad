import React, { Component } from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";
import TextField from "material-ui/TextField";

class SaveFileModal extends Component {
  constructor(props) {
    super(props);
  }

  handleSave = () => {
    const name = this.refs.input.getValue();
    const textValue = this.props.textValue;
    this.props.onSave(name, textValue);
    this.props.onCancel();
  };

  mockSubmit = e => {
    e.keyCode === 13 && this.handleSave();
  };

  render() {
    const { isSaving, onSave, onCancel, textValue } = this.props;
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
    ];
    return (
      <div>
        <Dialog
          title="Please enter the filename"
          actions={actions}
          modal={false}
          open={isSaving}
          onRequestClose={this.handleClose}
          contentStyle={{
            width: "50vw"
          }}
          bodyStyle={{
            display: "flex",
            justifyContent: "center"
          }}
          titleStyle={{
            fontWeight: "300",
            fontSize: "2rem"
          }}
        >
          <TextField
            hintText="filename"
            fullWidth={true}
            onKeyDown={this.mockSubmit}
            ref="input"
          />
        </Dialog>
      </div>
    );
  }
}

SaveFileModal.propTypes = {
  isSaving: PropTypes.bool,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  textValue: PropTypes.string
};

export default SaveFileModal;
